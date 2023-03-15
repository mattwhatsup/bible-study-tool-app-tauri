import { FunctionComponent } from 'react'
import BookDropDown from './BookDropDown'
import ChapterDropDown from './ChapterDropDown'
import VerseDropDown from './VerseDropDown'
import './BibleSelector.css'

interface BibleSelectorProps {}

const BibleSelector: FunctionComponent<BibleSelectorProps> = () => {
  return (
    <>
      <BookDropDown />
      <i className=" tw-text-gray-400 tw-mx-1 fa-solid fa-chevron-right"></i>
      <ChapterDropDown />
      <i className=" tw-text-gray-400 tw-mx-1 fa-solid fa-chevron-right"></i>
      <VerseDropDown />
    </>
  )
}

export default BibleSelector
