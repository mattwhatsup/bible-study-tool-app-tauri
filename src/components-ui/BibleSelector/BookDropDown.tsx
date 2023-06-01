import { FunctionComponent, useContext } from 'react'
import BookPopupSelector from './BookPopupSelector'
import BibleDropDown, { SelectType } from './BibleDropDown'
import { BibleSelectorContext } from './BibleSelectorContextProvider'
import { SelectedValueContext } from '.'

interface BookDropDownProps {}

const BookDropDown: FunctionComponent<BookDropDownProps> = () => {
  const { books } = useContext(BibleSelectorContext)!
  const { selected } = useContext(SelectedValueContext)!
  const label = selected?.book
    ? books.find((book) => book.id === selected.book)!.name_cn
    : '<选择书>'

  return (
    <BibleDropDown label={label} selectType={SelectType.Book}>
      <BookPopupSelector className="shadow-lg border-gray-200" />
    </BibleDropDown>
  )
}

export default BookDropDown
