import { FunctionComponent, ReactElement } from 'react'
import './Tabs.css'

interface TabsProps<T> {
  onChoose?: (index: number) => void
  onRemove?: (index: number) => void
  onSort?: () => void
  onAdd?: () => void
  activeIndex: number
  items: T[]
  tabLabelText?: (items: T) => string
}

const Tabs = <T extends unknown>({
  tabLabelText,
  items,
  activeIndex = 0,
  onChoose,
  onRemove,
  onSort,
  onAdd,
}: TabsProps<T>) => {
  return (
    <div className="flex">
      <span className="tab-scroller-control">
        <button className="btn btn-outline btn-secondary btn-xs ">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn btn-outline btn-secondary btn-xs  ml-1">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </span>

      <div className="tabs flex-1 flex-nowrap overflow-hidden">
        {items?.map((item, index) => (
          <label
            className={`group tab tab-lifted relative px-6 ${
              activeIndex === index ? 'tab-active' : ''
            }`}
            key={index}
            onClick={() => onChoose?.(index)}
          >
            {tabLabelText?.(item)}
            <span
              className={`absolute top-1 right-1 hidden ${
                activeIndex !== index ? 'group-hover:block' : ''
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 hover:bg-blue-gray-50"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove?.(index)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </label>
        ))}

        <span className="tab tab-lifted flex-1 tab-placeholder">
          {/** empty */}
        </span>
      </div>
      <span className="tab tab-utility-control">
        <button className="btn btn-primary btn-xs " onClick={onAdd}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </span>
    </div>
  )
}

export default Tabs
