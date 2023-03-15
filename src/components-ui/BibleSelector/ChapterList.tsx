import { FunctionComponent, HTMLAttributes } from 'react'

interface ChapterListProps extends HTMLAttributes<HTMLDivElement> {}

const ChapterList: FunctionComponent<ChapterListProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="tw-flex tw-items-center book-list-header tw-leading-[31px]">
        <span className=" tw-font-bold">章</span>
      </div>
      <div className="list-height tw-overflow-y-auto list-content">
        <ul className="book-grid tw-mt-2 tw-mr-2">
          <li>
            <span>1</span>
          </li>
          <li className="active">
            <span>2</span>
          </li>
          <li>
            <span>3</span>
          </li>
          <li>
            <span>4</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>3</span>
          </li>
          <li>
            <span>4</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>6</span>
          </li>
          <li>
            <span>7</span>
          </li>
          <li>
            <span>8</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ChapterList
