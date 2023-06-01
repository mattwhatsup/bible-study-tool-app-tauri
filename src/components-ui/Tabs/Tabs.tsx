import { FunctionComponent, ReactElement, useCallback } from 'react'
import './Tabs.css'
import TabItem from './TabItem'

interface TabsProps<T> {
  onChoose?: (index: number) => void
  onRemove?: (index: number) => void
  onSort?: (fromIndex: number, toIndex: number) => void
  onAdd?: () => void
  activeIndex: number
  items: T[]
  tabLabelText: (items: T) => string
  tabUniqId: (items: T) => string
}

const Tabs = <T extends unknown>({
  tabLabelText,
  tabUniqId,
  items,
  activeIndex = 0,
  onChoose,
  onRemove,
  onSort,
  onAdd,
}: TabsProps<T>) => {
  const findItemIndex = useCallback(
    (id: string) => items.findIndex((item) => tabUniqId(item) === id),
    [items],
  )
  const moveItem = useCallback(
    (fromIndex: number, toIndex: number) => {
      onSort?.(fromIndex, toIndex)
    },
    [items],
  )

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
          <TabItem
            key={tabUniqId(item)}
            uniqId={tabUniqId(item)}
            label={tabLabelText(item)}
            isActive={activeIndex === index}
            onClick={() => onChoose?.(index)}
            onRemove={() => {
              onRemove?.(index)
            }}
            findItemIndex={findItemIndex}
            moveItem={moveItem}
          />
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
