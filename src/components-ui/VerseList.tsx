import { FunctionComponent } from 'react'
import './BookList.css'

interface VerseListProps {}

const VerseList: FunctionComponent<VerseListProps> = () => {
  return (
    <ul className="book-grid tw-mt-2">
      <li>
        <span>1</span>
      </li>
      <li className="active">
        <span>2</span>
      </li>
      <li>
        <span>3</span>
      </li>
    </ul>
  )
}

export default VerseList
