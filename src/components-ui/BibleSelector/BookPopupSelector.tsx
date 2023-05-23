import { FunctionComponent, HTMLAttributes } from 'react'
import BookList from './BookList'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import { BibleSelectorProps } from './BibleDropDown'
import './BibleSelector.css'
import BibleSelectorPanelCloser from './BibleSelectorPanelCloser'
import { Popover } from '@headlessui/react'

interface BookPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const BookPopupSelector: FunctionComponent<
  BookPopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className, onSelect, selected, selectType, onClose }) => {
  return (
    <div
      className={
        ' pop lt bg-white p-2 flex w-[42rem] relative rounded-md ' + className
      }
    >
      <BibleSelectorPanelCloser onClose={onClose} />

      <BookList className="flex-1 mr-4" />
      <ChapterList className="flex-1" />
      <VerseList className="flex-1 ml-2" />
    </div>
  )
}

export default BookPopupSelector
