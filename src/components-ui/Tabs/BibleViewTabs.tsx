import update from 'immutability-helper'
import { FunctionComponent, useState } from 'react'
import { v4 } from 'uuid'
import Tabs from './Tabs'

interface BibleTabItem {
  uniqId: string
  book: { id: number; name: string }
  chapter: number
  verse: number
}

interface BibleViewTabsProps {}

const BibleViewTabs: FunctionComponent<BibleViewTabsProps> = ({ ...props }) => {
  const [items, setItems] = useState<BibleTabItem[]>([
    { uniqId: 'a', book: { id: 1, name: 'aaa' }, chapter: 1, verse: 1 },
    { uniqId: 'b', book: { id: 2, name: 'bbb' }, chapter: 1, verse: 1 },
    { uniqId: 'c', book: { id: 3, name: 'ccc' }, chapter: 1, verse: 1 },
    { uniqId: 'd', book: { id: 4, name: 'ddd' }, chapter: 1, verse: 1 },
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Tabs
      items={items}
      activeIndex={activeIndex}
      tabLabelText={(item) => `${item.book.name}${item.chapter}章`}
      tabUniqId={(item) => item.uniqId}
      onRemove={(index) => {
        setItems([...items.slice(0, index), ...items.slice(index + 1)])
        if (index < activeIndex) {
          setActiveIndex(activeIndex - 1)
        }
      }}
      onChoose={(index) => {
        setActiveIndex(index)
      }}
      onAdd={() => {
        setItems([
          ...items,
          { uniqId: v4(), book: { id: 6, name: 'aaa' }, chapter: 1, verse: 1 },
        ])
      }}
      onSort={(fromIndex, toIndex) => {
        toIndex = toIndex < 0 ? 0 : toIndex
        const item = items[fromIndex]
        setItems(
          update(items, {
            $splice: [
              [fromIndex, 1],
              [toIndex, 0, item],
            ],
          }),
        )
      }}
    />
  )
}

export default BibleViewTabs
