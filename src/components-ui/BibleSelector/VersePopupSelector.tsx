import { FunctionComponent, HTMLAttributes } from 'react'
import VerseList from './VerseList'
import { BibleSelectorProps } from './BibleDropDown'

interface VersePopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const VersePopupSelector: FunctionComponent<
  VersePopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className }) => {
  return (
    <div
      className={
        'pop lt bg-white p-2 flex w-[13rem] relative rounded-md ' + className
      }
    >
      <button className=" absolute right-2 top-1">
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <VerseList className="flex-1 ml-2" />
    </div>
  )
}

export default VersePopupSelector
