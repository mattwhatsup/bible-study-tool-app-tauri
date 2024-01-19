import { FunctionComponent, ReactElement, useCallback } from 'react'
import './Tabs.css'
import TabItem from './TabItem'

interface TabsProps<T> {
  onChoose?: (id: string) => void
  onRemove?: (index: number) => void
  onSort?: (fromIndex: number, toIndex: number) => void
  onAdd?: () => void
  activeId: string
  items: T[]
  tabLabelText: (items: T) => string
  tabUniqId: (items: T) => string
}

const Tabs = <T extends unknown>({
  tabLabelText,
  tabUniqId,
  items,
  activeId,
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
    <div className="flex max-w-full">
      <span className="tab-scroller-control w-[90px] shrink-0">
        <button className="btn btn-outline btn-secondary btn-xs ">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn btn-outline btn-secondary btn-xs  ml-1">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </span>
      <div className="flex-1 w-1 overflow-hidden">
        <div className="tabs flex-nowrap overflow-hidden max-w-full">
          {items?.map((item, index) => (
            <TabItem
              key={tabUniqId(item)}
              uniqId={tabUniqId(item)}
              label={tabLabelText(item)}
              isActive={activeId === tabUniqId(item)}
              onClick={() => onChoose?.(tabUniqId(item))}
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
      </div>

      <span className="tab tab-utility-control w-[60px] shrink-0">
        <button className="btn btn-primary btn-xs " onClick={onAdd}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </span>
    </div>
  )
}

export default Tabs
