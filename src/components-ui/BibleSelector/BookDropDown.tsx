import { FunctionComponent } from 'react'
import BookPopupSelector from './BookPopupSelector'
import BibleDropDown, { SelectType } from './BibleDropDown'

interface BookDropDownProps {}

const BookDropDown: FunctionComponent<BookDropDownProps> = () => {
  return (
    <BibleDropDown label={'<选择书>'} selectType={SelectType.Book}>
      <BookPopupSelector className="shadow-lg border-gray-200" />
    </BibleDropDown>
  )
}

export default BookDropDown
