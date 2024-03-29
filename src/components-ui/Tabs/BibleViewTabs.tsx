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
    { uniqId: 'a', book: { id: 1, name: '创世纪' }, chapter: 1, verse: 1 },
    { uniqId: 'b', book: { id: 2, name: 'bbb' }, chapter: 1, verse: 1 },
    { uniqId: 'c', book: { id: 3, name: 'ccc' }, chapter: 1, verse: 1 },
    { uniqId: 'd', book: { id: 4, name: 'ddd' }, chapter: 1, verse: 1 },
  ])
  const [activeId, setActiveId] = useState('a')

  return (
    <Tabs
      items={items}
      activeId={activeId}
      tabLabelText={(item) => `${item.book.name}${item.chapter}章`}
      tabUniqId={(item) => item.uniqId}
      onRemove={(index) => {
        setItems([...items.slice(0, index), ...items.slice(index + 1)])
      }}
      onChoose={(id) => {
        setActiveId(id)
      }}
      onAdd={() => {
        setItems([
          ...items,
          { uniqId: v4(), book: { id: 6, name: 'aaa' }, chapter: 1, verse: 1 },
        ])
      }}
      onSort={(fromIndex, toIndex) => {
        console.log('from', fromIndex, 'to', toIndex)
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
