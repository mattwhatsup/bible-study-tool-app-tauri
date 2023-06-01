import { FunctionComponent, ReactNode, useState } from 'react'
import Modal, { Size } from './Modal'
import { Button } from '@material-tailwind/react'
import { colors } from '@material-tailwind/react/types/generic'
import { isString } from '../../utils/checker'

/*
  usage

  <Alert
        title={'贵庚啊？'}
        message={'hahaha'}
        onOk={() => console.log('ok')}
        okColor="green"
      />
*/

export interface AlertProps {
  message: ReactNode
  okColor?: colors
  onOk?: () => void
  size?: Size
  okLabel?: string
  title?: string
  onClose?: () => void
}

const Alert: FunctionComponent<AlertProps> = ({
  title,
  message,
  okColor = 'red',
  onOk,
  onClose,
  size,
  okLabel = '确认',
}) => {
  const [isOpen, setIsOpen] = useState(true)
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      size={size}
      title={title}
      content={
        <>
          <div className="mt-4">
            {isString(message) ? (
              <p className="text-sm text-gray-500">{message}</p>
            ) : (
              message
            )}
          </div>
          <div className="mt-4 text-right">
            <Button
              color={okColor}
              onClick={() => {
                closeModal()
                onOk?.()
                onClose?.()
              }}
              ripple={false}
              size="sm"
            >
              {okLabel}
            </Button>
          </div>
        </>
      }
      open={isOpen}
      showCloseBtn={false}
      closeable={false}
      onClose={closeModal}
    />
  )
}

export default Alert
