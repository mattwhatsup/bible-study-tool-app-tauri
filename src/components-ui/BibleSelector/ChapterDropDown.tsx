import { FunctionComponent } from 'react'
import ChapterPopupSelector from './ChapterPopupSelector'

interface ChapterDropDownProps {}

const ChapterDropDown: FunctionComponent<ChapterDropDownProps> = () => {
  return (
    <div className="tw-dropdown tw-dropdown-bottom tw-dropdown-start">
      <label tabIndex={0} className="tw-btn tw-m-1 tw-btn-sm tw-btn-primary">
        <span className="tw-mr-2">选择章</span>
        <i className="fa-solid fa-chevron-down"></i>
      </label>

      <ChapterPopupSelector className="dropdown-menu tw-dropdown-content tw-block !tw-top-[120%] tw-shadow-lg tw-border-gray-200" />
    </div>
  )
}

export default ChapterDropDown
