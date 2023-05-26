import { FunctionComponent, cloneElement, useState } from 'react'
import { AlertWrapperProps } from './AlertWrapper'
import Prompt, { PromptProps } from './Prompt'

/**
 *
 * <PromptWrapper
        title={'贵庚啊？'}
        getValueFn={() => text}
        content={
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        }
        okLabel="吃了"
        onOk={(v) => console.log('ok', v)}
      >
        <button>提问</button>
      </PromptWrapper>
 *
 */

const PromptWrapper: FunctionComponent<PromptProps & AlertWrapperProps> = ({
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
        <Prompt
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

export default PromptWrapper
