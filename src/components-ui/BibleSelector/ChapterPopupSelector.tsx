import { FunctionComponent, HTMLAttributes } from 'react'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import './BibleSelector.css'
import { BibleSelectorProps } from './BibleDropDown'

interface ChapterPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const ChapterPopupSelector: FunctionComponent<
  ChapterPopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className }) => {
  return (
    <div
      className={
        'pop lt bg-white p-2 flex w-[26rem] relative rounded-md ' + className
      }
    >
      <button className=" absolute right-2 top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <ChapterList className="flex-1" />
      <VerseList className="flex-1 ml-2" />
    </div>
  )
}

export default ChapterPopupSelector
