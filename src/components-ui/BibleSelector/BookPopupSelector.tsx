import { FunctionComponent, HTMLAttributes, useContext, useState } from 'react'
import BookList from './BookList'
import ChapterList from './ChapterList'
import VerseList from './VerseList'
import { BibleSelectorProps, SelectValue } from './BibleDropDown'
import './BibleSelector.css'
import BibleSelectorPanelCloser from './BibleSelectorPanelCloser'
import { Popover } from '@headlessui/react'
import { SelectedValueContext } from '.'

interface BookPopupSelectorProps extends HTMLAttributes<HTMLDivElement> {}

const BookPopupSelector: FunctionComponent<
  BookPopupSelectorProps & Partial<BibleSelectorProps>
> = ({ className, selectType, onClose }) => {
  const context = useContext(SelectedValueContext)

  // tailwindcss: handle dynamic classname in this way
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const cols =
    1 +
    (context?.selected?.book ? 1 : 0) +
    (context?.selected?.book && context?.selected?.chapter ? 1 : 0)
  const widths = {
    1: 'w-[14rem]',
    2: 'w-[28rem]',
    3: 'w-[42rem]',
  } as Record<number, string>

  return (
    <div
      className={
        ` pop lt bg-white p-2 ${widths[cols]} relative rounded-md ` + className
      }
    >
      <BibleSelectorPanelCloser onClose={onClose} />
      <div className="flex ">
        <BookList className="flex-1 mt-2 " />
        {context?.selected?.book && (
          <ChapterList className="flex-1 mt-2 ml-2" />
        )}
        {context?.selected?.book && context?.selected?.chapter && (
          <VerseList className="flex-1 ml-2 mt-2" closeHandler={onClose} />
        )}
      </div>
    </div>
  )
}

export default BookPopupSelector
