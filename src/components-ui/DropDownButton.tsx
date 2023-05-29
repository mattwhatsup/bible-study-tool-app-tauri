import { Menu, Transition } from '@headlessui/react'
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface _DropDownButtonProps<T> {
  justifyRight?: boolean
  items: Array<T>
  selectedIndex?: number | Array<number>
  multi?: boolean
  itemRender: (arg: {
    item: T
    index: number
    selected?: boolean
    onItemClick?: (index: number) => void
  }) => ReactElement
  label: string
  onItemClick?: (index: number) => void
}

type DropDownButtonProps<T> = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  _DropDownButtonProps<T>

// const DropDownButton: FunctionComponent<DropDownButtonProps<T>> = () => {
const DropDownButton = <T extends unknown>({
  label,
  justifyRight,
  items,
  itemRender,
  selectedIndex,
  multi = false,
  onItemClick,
}: DropDownButtonProps<T>) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {label}
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${
            justifyRight ? 'right-0' : 'left-0'
          } mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-1 py-1 ">
            {items.map((item, index) => {
              let selected = false
              if (selectedIndex !== undefined) {
                if (multi) {
                  selected = (selectedIndex as Array<number>).includes(index)
                } else {
                  selected = (selectedIndex as number) === index
                }
              }
              return itemRender({ item, index, selected, onItemClick })
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownButton
