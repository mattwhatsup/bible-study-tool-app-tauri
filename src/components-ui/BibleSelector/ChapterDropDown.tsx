import { FunctionComponent } from 'react'
import ChapterPopupSelector from './ChapterPopupSelector'
import BibleDropDown, { SelectType } from './BibleDropDown'

interface ChapterDropDownProps {}

const ChapterDropDown: FunctionComponent<ChapterDropDownProps> = () => {
  return (
    <BibleDropDown
      label={'选择章'}
      selectType={SelectType.Chapter}
      selected={undefined}
      onSelect={(value) => {}}
    >
      <ChapterPopupSelector className="dropdown-menu dropdown-content block !top-[120%] shadow-lg border-gray-200" />
    </BibleDropDown>
  )
}

export default ChapterDropDown
