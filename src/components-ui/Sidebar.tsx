import { FunctionComponent } from 'react'
import './Sidebar.css'

interface SidebarProps {}

/*
<nav
    id="sidenav-3"
    class="fixed top-0 left-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
    data-te-sidenav-init
    data-te-sidenav-hidden="false"
    data-te-sidenav-color="white">
    <ul
      class="relative m-0 list-none px-[0.2rem]"
      data-te-sidenav-menu-ref>
      <li class="relative">
        <a
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            class="mr-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

          </span>
          <span>Link 1</span>
        </a>
      </li>

    </ul>
  </nav>
*/

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
          <a
            className="text-gray-400 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li className="relative">
          <a
            className="text-gray-300 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-solid fa-a"></i>
          </a>
        </li>

        <li className="relative">
          <a
            className="text-gray-300 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-solid fa-pen"></i>
          </a>
        </li>

        <li className="relative">
          <a
            className="text-gray-300 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-regular fa-circle-check"></i>
          </a>
        </li>
        <li className="relative">
          <a
            className="text-gray-300 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-solid fa-list"></i>
          </a>
        </li>
      </ul>

      <ul className=" absolute left-0 bottom-2  m-0 list-none py-[0.2rem] w-full">
        <li className="relative">
          <a
            className="text-gray-300 hover:bg-white/10 hover:outline-none
             focus:bg-white/10 active:bg-white/10 hover:text-gray-300
              active:outline-none w-full h-12 flex items-center justify-center
              cursor-pointer"
          >
            <i className="fa-solid fa-gear"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
