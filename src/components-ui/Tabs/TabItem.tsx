import { monitor } from '@redux-devtools/app'
import { FunctionComponent, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
  tabItem: 'tabItem',
}

interface DragItem {
  uniqId: string
  originalIndex: number
}

interface TabItemProps {
  uniqId: string
  isActive: boolean
  label: string
  onClick: () => void
  onRemove: () => void
  findItemIndex: (id: string) => number
  moveItem: (fromIndex: number, toIndex: number) => void
}

const TabItem: FunctionComponent<TabItemProps> = ({
  uniqId,
  isActive,
  label,
  onClick,
  onRemove,
  findItemIndex,
  moveItem,
}) => {
  const labelRef = useRef<HTMLLabelElement>(null)
  const originalIndex = findItemIndex(uniqId)
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.tabItem,
      item: { uniqId, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [uniqId, originalIndex, moveItem],
  )

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.tabItem,
      collect(monitor) {
        const overIndex = findItemIndex(uniqId)
        const item = monitor.getItem()
        return {
          isOver:
            monitor.isOver() && overIndex !== (item as DragItem)?.originalIndex,
        }
      },
      drop(item, monitor) {
        const overIndex = findItemIndex(uniqId)
        if (overIndex === (item as DragItem).originalIndex) {
          return
        }
        const originalIndex = (item as DragItem).originalIndex
        moveItem(originalIndex, overIndex)
      },
    }),
    [findItemIndex],
  )

  return (
    <span
      ref={(element) => drop(drag(element))}
      className={`${isDragging ? 'opacity-30 bg-yellow-300/40' : ''}`}
    >
      <label
        ref={labelRef}
        className={`group tab tab-lifted relative px-6 ${
          isActive ? 'tab-active' : ''
        }  ${isOver ? '!bg-blue-gray-100/40' : ''}`}
        onClick={onClick}
      >
        {label}
        <span
          className={`absolute top-1 right-1 hidden ${
            !isActive ? 'group-hover:block' : ''
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
              onRemove()
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
    </span>
  )
}

export default TabItem
