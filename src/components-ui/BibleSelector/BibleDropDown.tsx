import { FunctionComponent, ReactElement, cloneElement } from 'react'
import { Popover, Transition } from '@headlessui/react'
import BookPopupSelector from './BookPopupSelector'

interface BibleDropDownProps {
  label: String
  children: ReactElement
}

export enum SelectType {
  Book,
  Chapter,
  Verse,
}

export type SelectValue = {
  book?: string
  chapter?: number
  verse?: number
}

export interface BibleSelectorProps {
  selectType: SelectType
  selected?: SelectValue
  onSelect: (value: SelectValue) => void
  onClose?: Function
}

const BibleDropDown: FunctionComponent<
  BibleDropDownProps & BibleSelectorProps
> = ({ label, children, ...selectorProps }) => {
  return (
    <Popover className={'relative'}>
      <Popover.Button
        className={`group inline-flex items-center rounded-md bg-orange-700 px-3 py-2
          text-base font-medium text-white hover:text-opacity-100
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white
          focus-visible:ring-opacity-75`}
      >
        {label}
      </Popover.Button>
      <Transition
        className={'absolute z-10 top-[3.3em]'}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel>
          {({ close }) => {
            const panel = cloneElement(children, {
              ...selectorProps,
              onClose: close,
            })
            return panel
          }}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default BibleDropDown
