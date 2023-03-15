import { FunctionComponent } from 'react'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import './BibleSelector.css'

interface ChapterPopupSelectorProps {}

const ChapterPopupSelector: FunctionComponent<
  ChapterPopupSelectorProps
> = () => {
  return (
    <div className="pop lt tw-bg-white tw-border tw-shadow-lg tw-p-2 tw-flex tw-w-[26rem] tw-relative">
      <button className=" tw-absolute tw-right-2 tw-top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <ChapterList className="tw-flex-1" />
      <VerseList className="tw-flex-1 tw-ml-2" />
    </div>
  )
}

export default ChapterPopupSelector
