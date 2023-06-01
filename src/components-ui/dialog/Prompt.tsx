import { FunctionComponent, ReactNode, useState } from 'react'
import { ConfirmProps } from './Confirm'
import { AlertProps } from './Alert'
import { Button } from '@material-tailwind/react'
import Modal from './Modal'

/*
  usage

  <Prompt
        title={'贵庚啊？'}
        getValueFn={() => text}
        content={
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        }
        onOk={(v) => console.log('ok', v)}
        onCancel={() => console.log('cancel')}
        okColor="green"
      />
*/

interface _PromptProps {
  getValueFn: () => any
  onOk?: (param: any) => void
  content?: ReactNode
}

export type PromptProps = Omit<
  Omit<AlertProps & ConfirmProps, 'message'>,
  'onOk'
> &
  _PromptProps

const Prompt: FunctionComponent<PromptProps> = ({
  title,
  okColor = 'blue',
  cancelColor = 'red',
  onOk,
  onCancel,
  onClose,
  size,
  okLabel = '确认',
  cancelLabel = '取消',
  content,
  getValueFn,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      title={title}
      size={size}
      content={
        <>
          <div className="mt-4">{content}</div>
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
                onOk?.(getValueFn())
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

export default Prompt
