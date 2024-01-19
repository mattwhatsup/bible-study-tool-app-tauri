import { FunctionComponent } from 'react'
import './Sidebar.css'
import SidebarIcon from './SidebarIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectLayout,
  setActiveSidebarIndex,
} from '../../features/layout/layoutSlice'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const layout = useSelector(selectLayout)
  const dispatch = useDispatch()
  const items = [
    'fa-solid fa-magnifying-glass',
    'fa-solid fa-a',
    'fa-solid fa-pen',
    'fa-regular fa-circle-check',
    'fa-solid fa-list',
  ]

  return (
    <nav
      className=" fixed top-0 left-0 z-[1035] h-screen w-12
      -translate-x-full data-[sidebar-hidden='false']:translate-x-0
      overflow-hidden bg-blue-gray-800 shadow-md text-emerald-100 select-none"
      data-sidebar-hidden="false"
    >
      <ul className="relative m-0 list-none py-[0.2rem] sidebar-tabs">
        {items.map((item, index) => (
          <li
            className={`relative ${
              index === layout.activeSidebarIndex ? 'active' : ''
            }`}
            onClick={() => {
              dispatch(setActiveSidebarIndex(index))
            }}
            key={item}
          >
            <SidebarIcon className={item} />
          </li>
        ))}
      </ul>

      <ul className=" absolute left-0 bottom-2  m-0 list-none py-[0.2rem] w-full">
        <li className="relative">
          <SidebarIcon className="fa-solid fa-gear" />
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
