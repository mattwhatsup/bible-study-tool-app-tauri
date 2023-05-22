import { FunctionComponent } from 'react'
import BookDropDown from './BookDropDown'
import ChapterDropDown from './ChapterDropDown'
import VerseDropDown from './VerseDropDown'
import './BibleSelector.css'

interface BibleSelectorProps {}

const BibleSelector: FunctionComponent<BibleSelectorProps> = () => {
  return (
    <div className=" flex items-center">
      <BookDropDown />
      <i className=" text-gray-400 mx-1 fa-solid fa-chevron-right"></i>
      <ChapterDropDown />
      <i className=" text-gray-400 mx-1 fa-solid fa-chevron-right"></i>
      <VerseDropDown />
    </div>
  )
}

export default BibleSelector
