import { FunctionComponent } from 'react'

interface BibleSelectorPanelCloserProps {
  onClose?: Function
}

const BibleSelectorPanelCloser: FunctionComponent<
  BibleSelectorPanelCloserProps
> = ({ onClose }) => {
  return (
    <button className=" absolute right-2 top-1" onClick={() => onClose?.()}>
      <i className="fa-solid fa-rectangle-xmark"></i>
    </button>
  )
}

export default BibleSelectorPanelCloser
