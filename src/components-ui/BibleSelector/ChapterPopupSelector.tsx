import { FunctionComponent, HTMLAttributes } from 'react'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import './BibleSelector.css'
import { BibleSelectorProps } from './BibleDropDown'
import BibleSelectorPanelCloser from './BibleSelectorPanelCloser'

interface ChapterPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const ChapterPopupSelector: FunctionComponent<
  ChapterPopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className, onClose }) => {
  return (
    <div
      className={
        'pop lt bg-white p-2 flex w-[26rem] relative rounded-md ' + className
      }
    >
      <BibleSelectorPanelCloser onClose={onClose} />
      <ChapterList className="flex-1" />
      <VerseList className="flex-1 ml-2" closeHandler={onClose} />
    </div>
  )
}

export default ChapterPopupSelector
