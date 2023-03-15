import { FunctionComponent, HTMLAttributes } from 'react'
import VerseList from './VerseList'

interface VersePopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const VersePopupSelector: FunctionComponent<VersePopupSelectorProps> = ({
  className,
}) => {
  return (
    <div
      className={
        'pop lt tw-bg-white tw-p-2 tw-flex tw-w-[13rem] tw-relative tw-rounded-md ' +
        className
      }
    >
      <button className=" tw-absolute tw-right-2 tw-top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <VerseList className="tw-flex-1 tw-ml-2" />
    </div>
  )
}

export default VersePopupSelector
