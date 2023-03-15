import { FunctionComponent, HTMLAttributes } from 'react'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import './BibleSelector.css'

interface ChapterPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const ChapterPopupSelector: FunctionComponent<ChapterPopupSelectorProps> = ({
  className,
}) => {
  return (
    <div
      className={
        'pop lt tw-bg-white tw-p-2 tw-flex tw-w-[26rem] tw-relative tw-rounded-md ' +
        className
      }
    >
      <button className=" tw-absolute tw-right-2 tw-top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <ChapterList className="tw-flex-1" />
      <VerseList className="tw-flex-1 tw-ml-2" />
    </div>
  )
}

export default ChapterPopupSelector
