import { FunctionComponent, HTMLAttributes } from 'react'

interface VerseListProps extends HTMLAttributes<HTMLDivElement> {}

const VerseList: FunctionComponent<VerseListProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="tw-flex tw-items-center book-list-header tw-leading-[31px]">
        <span className=" tw-font-bold">节</span>
      </div>
      <div className="list-height tw-overflow-y-auto list-content">
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
      </div>
    </div>
  )
}

export default VerseList
