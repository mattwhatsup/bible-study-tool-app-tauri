import { FunctionComponent } from 'react'
import VersePopupSelector from './VersePopupSelector'
import BibleDropDown, { SelectType } from './BibleDropDown'

interface VerseDropDownProps {}

const VerseDropDown: FunctionComponent<VerseDropDownProps> = () => {
  return (
    <BibleDropDown
      label={'选择节'}
      selectType={SelectType.Verse}
      selected={undefined}
      onSelect={(value) => {}}
    >
      <VersePopupSelector className="dropdown-menu dropdown-content block !top-[120%] shadow-lg border-gray-200" />
    </BibleDropDown>
  )
}

export default VerseDropDown
