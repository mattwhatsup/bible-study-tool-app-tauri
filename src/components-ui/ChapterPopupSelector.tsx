import { FunctionComponent } from 'react'
import ChapterList from './ChapterList'
import VerseList from './VerseList'

interface ChapterPopupSelectorProps {}

const ChapterPopupSelector: FunctionComponent<
  ChapterPopupSelectorProps
> = () => {
  return (
    <div className=" tw-bg-white tw-border tw-shadow-lg tw-p-2 tw-flex tw-w-[26rem] tw-relative">
      <button className=" tw-absolute tw-right-2 tw-top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <div className="tw-flex-1 ">
        <div className="tw-flex tw-items-center book-list-header">
          <span className=" tw-font-bold">章</span>
        </div>

        <div className="list-height tw-overflow-y-auto list-content">
          <ChapterList />
        </div>
      </div>
      <div className="tw-flex-1 tw-ml-2">
        <div className="tw-flex tw-items-center book-list-header">
          <span className=" tw-font-bold">节</span>
        </div>

        <div className="list-height tw-overflow-y-auto list-content">
          <VerseList />
        </div>
      </div>
    </div>
  )
}

export default ChapterPopupSelector
