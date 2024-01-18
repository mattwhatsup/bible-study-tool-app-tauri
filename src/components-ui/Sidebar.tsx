import { FunctionComponent } from 'react'
import './Sidebar.css'
import SidebarIcon from './SidebarIcon'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <nav
      className=" fixed top-0 left-0 z-[1035] h-screen w-12
      -translate-x-full data-[sidebar-hidden='false']:translate-x-0
      overflow-hidden bg-blue-gray-800 shadow-md text-emerald-100"
      data-sidebar-hidden="false"
    >
      <ul className="relative m-0 list-none py-[0.2rem] sidebar-tabs">
        <li className="relative active">
          <SidebarIcon className="fa-solid fa-magnifying-glass" />
        </li>
        <li className="relative">
          <SidebarIcon className="fa-solid fa-a" />
        </li>

        <li className="relative">
          <SidebarIcon className="fa-solid fa-pen" />
        </li>

        <li className="relative">
          <SidebarIcon className="fa-regular fa-circle-check" />
        </li>
        <li className="relative">
          <SidebarIcon className="fa-solid fa-list" />
        </li>
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
