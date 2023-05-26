import { colors } from '@material-tailwind/react/types/generic'
import { FunctionComponent, useState } from 'react'
import { AlertProps } from './Alert'
import Modal from './Modal'
import { isString } from '../../utils/checker'
import { Button } from '@material-tailwind/react'

/*
  usage

  <Confirm
        title={'贵庚啊？'}
        message={'hahaha'}
        onOk={() => console.log('ok')}
        onCancel={() => console.log('cancel')}
        okColor="green"
      />
*/

// interface A {
//   name: string
//   age: number
//   gender: string
// }

// interface B {
//   name: number
//   age: string
// }

// type C = A & B

// const c: C = {
//   name: 1,
//   age: '2',
//   gender: 'male',
// } as C

export type ConfirmProps = {
  cancelColor?: colors
  onCancel?: () => void
  cancelLabel?: string
} & AlertProps

const Confirm: FunctionComponent<ConfirmProps> = ({
  title,
  message,
  okColor = 'blue',
  cancelColor = 'red',
  onOk,
  onCancel,
  onClose,
  size,
  okLabel = '确认',
  cancelLabel = '取消',
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
              color={cancelColor}
              onClick={() => {
                closeModal()
                onCancel?.()
                onClose?.()
              }}
              ripple={false}
              size="sm"
              className=" mr-2"
            >
              {cancelLabel}
            </Button>

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

export default Confirm
