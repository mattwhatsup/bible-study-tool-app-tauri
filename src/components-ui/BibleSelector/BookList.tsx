import {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { BibleSelectorContext } from './BibleSelectorContextProvider'
import { OtOrNt } from '../../app/api'
import { SelectedValueContext } from '.'

enum ListStyle {
  grid = 'grid',
  list = 'list',
}

interface BookListProps extends HTMLAttributes<HTMLDivElement> {}

function readListStyleFromLocalStorage() {
  const v = localStorage.getItem('BibleSelectorBookListStyle')
  if (!v || (v as ListStyle) === ListStyle.grid) {
    return ListStyle.grid
  } else {
    return ListStyle.list
  }
}

function writeListStyleToLocalStorage(v: string) {
  localStorage.setItem('BibleSelectorBookListStyle', v)
}

interface ItemProps {
  label: string
  active: boolean
}

const Item: FunctionComponent<ItemProps> = ({ label, active }) => {
  return (
    <li className={active ? 'active' : ''}>
      <span>{label}</span>
    </li>
  )
}

interface ListViewProps {
  style: ListStyle
}

// @todo handle select
const ListView: FunctionComponent<ListViewProps> = ({ style }) => {
  const context = useContext(SelectedValueContext)
  const selected = context?.selected
  const data = useContext(BibleSelectorContext)
  const groups = [
    { type: OtOrNt.ot, name: '旧约' },
    { type: OtOrNt.nt, name: '新约' },
  ]
  return (
    <div>
      {groups.map((group) => (
        <Fragment key={group.type}>
          <div className=" text-lg mt-2 sticky top-0 bg-white">
            {group.name}
          </div>
          <ul className={`book-${style} mt-2`}>
            {data?.books
              .filter((book) => book.ot_or_nt === group.type)
              .map((book) => (
                <Item
                  active={selected?.book === book.id}
                  key={book.id}
                  label={book.abbr_cn}
                />
              ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}

const BookList: FunctionComponent<BookListProps> = ({ className }) => {
  const listDiv = useRef<HTMLDivElement>(null)
  const [listStyle, setListStyle] = useState(readListStyleFromLocalStorage())

  useEffect(() => {
    // 重制滚动条
    if (listDiv.current) {
      listDiv.current.querySelector('li.active')?.scrollIntoView()
      listDiv.current.scrollTop -= 40
    }
  }, [listStyle])

  return (
    <div className={className}>
      <div className="flex items-center book-list-header leading-[31px]">
        <span className=" font-bold">书</span>
        <div className=" flex-1 relative">
          <i className="fa fa-search absolute left-3 top-0 text-gray-400 text-sm"></i>
          <input
            type="text"
            className="form-control form-control-sm pl-8 rounded-2xl text-sm w-full"
            placeholder="过滤..."
          />
        </div>
        <label className=" swap swap-rotate ml-2">
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => {
              const newValue = checked ? ListStyle.list : ListStyle.grid
              setListStyle(newValue)
              writeListStyleToLocalStorage(newValue)
            }}
            checked={listStyle === ListStyle.list}
          />
          <i className="fa fa-th swap-off" aria-hidden="true" />

          <i className="fa fa-bars swap-on" aria-hidden="true" />
        </label>
      </div>
      <div className="list-height overflow-y-auto list-content " ref={listDiv}>
        <ListView style={listStyle} />
      </div>
    </div>
  )
}

export default BookList
