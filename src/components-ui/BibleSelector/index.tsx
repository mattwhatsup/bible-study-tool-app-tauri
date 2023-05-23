import { FunctionComponent, useContext } from 'react'
import BookDropDown from './BookDropDown'
import ChapterDropDown from './ChapterDropDown'
import VerseDropDown from './VerseDropDown'
import './BibleSelector.css'
import BibleSelectorContextProvider, {
  BibleSelectorContext,
} from './BibleSelectorContextProvider'
import { OtOrNt } from '../../app/api'

interface BibleSelectorProps {
  onChange?: Function
}

const BibleSelector: FunctionComponent<BibleSelectorProps> = () => {
  const allBooks = useContext(BibleSelectorContext)

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

const Wrapper: FunctionComponent<BibleSelectorProps> = (props) => (
  <BibleSelectorContextProvider {...props}>
    <BibleSelector />
  </BibleSelectorContextProvider>
)

export default Wrapper
