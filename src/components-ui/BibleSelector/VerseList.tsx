import { FunctionComponent, HTMLAttributes } from 'react'

interface VerseListProps extends HTMLAttributes<HTMLDivElement> {}

const VerseList: FunctionComponent<VerseListProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex items-center book-list-header leading-[31px]">
        <span className=" font-bold">节</span>
      </div>
      <div className="list-height overflow-y-auto list-content">
        <ul className="book-grid mt-2">
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
      </div>
    </div>
  )
}

export default VerseList
