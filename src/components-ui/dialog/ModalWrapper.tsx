import { FunctionComponent, ReactElement, cloneElement, useState } from 'react'

interface ModalWrapperProps {
  children: ReactElement
  dialog: ReactElement
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = ({
  children,
  dialog,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  dialog = cloneElement(dialog, {
    open: isOpen,
    onClose: () => {
      setIsOpen(false)
    },
  })

  const element = cloneElement(children, {
    onClick: () => {
      setIsOpen(true)
    },
  })
  return (
    <>
      {element}
      {dialog}
    </>
  )
}

export default ModalWrapper
