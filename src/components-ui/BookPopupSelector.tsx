import { FunctionComponent } from 'react'
import BookList from './BookList'
import ChapterList from './ChapterList'
import VerseList from './VerseList'

interface BookPopupSelectorProps {}

const BookPopupSelector: FunctionComponent<BookPopupSelectorProps> = () => {
  return (
    <div className=" pop tw-bg-white tw-border tw-shadow-lg tw-p-2 tw-flex tw-w-[42rem] tw-relative tw-rounded-md">
      <button className=" tw-absolute tw-right-2 tw-top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>

      <div className="tw-flex-1 tw-mr-4">
        <div className="tw-flex tw-items-center book-list-header tw-leading-5">
          <span className=" tw-font-bold">书</span>
          <div className=" tw-flex-1 tw-relative">
            <i className="fa fa-search tw-absolute tw-left-3 tw-top-2 tw-text-gray-400"></i>
            <input
              type="text"
              className="form-control form-control-sm tw-pl-8 tw-rounded-2xl"
              placeholder="过滤..."
            />
          </div>
          <label className=" tw-swap tw-swap-rotate tw-ml-2">
            <input type="checkbox" />
            <i className="fa fa-th tw-swap-off" aria-hidden="true" />

            <i className="fa fa-bars tw-swap-on" aria-hidden="true" />
          </label>
        </div>
        <div className="list-height tw-overflow-y-auto list-content tw-pr-4">
          <BookList />
        </div>
      </div>

      <div className="tw-flex-1 ">
        <div className="tw-flex tw-items-center book-list-header tw-leading-[31px]">
          <span className=" tw-font-bold">章</span>
        </div>
        <div className="list-height tw-overflow-y-auto list-content">
          <ChapterList />
        </div>
      </div>

      <div className="tw-flex-1 tw-ml-2">
        <div className="tw-flex tw-items-center book-list-header tw-leading-[31px]">
          <span className=" tw-font-bold">节</span>
        </div>
        <div className="list-height tw-overflow-y-auto list-content">
          <VerseList />
        </div>
      </div>
    </div>
  )
}

export default BookPopupSelector
