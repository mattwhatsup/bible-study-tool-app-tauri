import { FunctionComponent, HTMLAttributes } from 'react'
import BookList from './BookList'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import { BibleSelectorProps } from './BibleDropDown'
import './BibleSelector.css'

interface BookPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const BookPopupSelector: FunctionComponent<
  BookPopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className, onSelect, selected, selectType }) => {
  return (
    <div
      className={
        ' pop lt bg-white p-2 flex w-[42rem] relative rounded-md ' + className
      }
    >
      <button
        className=" absolute right-2 top-1"
        onClick={() => onSelect?.('hi')}
      >
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>

      <BookList className="flex-1 mr-4" />
      <ChapterList className="flex-1" />
      <VerseList className="flex-1 ml-2" />
    </div>
  )
}

export default BookPopupSelector
