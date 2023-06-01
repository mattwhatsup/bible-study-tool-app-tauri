import { FunctionComponent, cloneElement, useState } from 'react'
import { AlertWrapperProps } from './AlertWrapper'
import Confirm, { ConfirmProps } from './Confirm'

/**
 * usage
 * <ConfirmWrapper message="吃了吗？" okLabel="吃了">
        <button>提问</button>
      </ConfirmWrapper>
 */

const ConfirmWrapper: FunctionComponent<AlertWrapperProps & ConfirmProps> = ({
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
        <Confirm
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

export default ConfirmWrapper
