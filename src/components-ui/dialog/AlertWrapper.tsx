import {
  FunctionComponent,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from 'react'
import Alert, { AlertProps } from './Alert'

/**
 * usage
 *
 * <AlertWrapper message="来呀～" okColor="deep-orange">
        <button>ok</button>
      </AlertWrapper>
 */

export interface AlertWrapperProps {
  children: ReactElement
}

const AlertWrapper: FunctionComponent<AlertWrapperProps & AlertProps> = ({
  children,
  onClose,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const trigger = cloneElement(children, {
    onClick: () => {
      setShow(true)
    },
  })
  return (
    <>
      {trigger}
      {show && (
        <Alert
          {...props}
          onClose={() => {
            onClose?.()
            setShow(false)
          }}
        />
      )}
    </>
  )
}

export default AlertWrapper
