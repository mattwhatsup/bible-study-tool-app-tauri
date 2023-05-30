import { FunctionComponent, useState } from 'react'
import Tabs from './Tabs'

interface BibleTabItem {
  book: { id: number; name: string }
  chapter: number
  verse: number
}

interface BibleViewTabsProps {}

const BibleViewTabs: FunctionComponent<BibleViewTabsProps> = ({ ...props }) => {
  const [items, setItems] = useState<BibleTabItem[]>([
    { book: { id: 1, name: 'aaa' }, chapter: 1, verse: 1 },
    { book: { id: 2, name: 'bbb' }, chapter: 1, verse: 1 },
    { book: { id: 3, name: 'ccc' }, chapter: 1, verse: 1 },
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Tabs
      items={items}
      activeIndex={activeIndex}
      tabLabelText={(item) => `${item.book.name}${item.chapter}章`}
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
          { book: { id: 6, name: 'aaa' }, chapter: 1, verse: 1 },
        ])
      }}
    />
  )
}

export default BibleViewTabs
