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
      className=" tw-fixed tw-top-0 tw-left-0 tw-z-[1035] tw-h-screen tw-w-12
      -tw-translate-x-full data-[sidebar-hidden='false']:tw-translate-x-0
      tw-overflow-hidden tw-bg-zinc-900 tw-shadow-md tw-text-emerald-100"
      data-sidebar-hidden="false"
    >
      <ul className="tw-relative tw-m-0 tw-list-none tw-py-[0.2rem] sidebar-tabs">
        <li className="tw-relative active">
          <a
            className="tw-text-gray-400 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li className="tw-relative">
          <a
            className="tw-text-gray-300 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-solid fa-a"></i>
          </a>
        </li>

        <li className="tw-relative">
          <a
            className="tw-text-gray-300 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-solid fa-pen"></i>
          </a>
        </li>

        <li className="tw-relative">
          <a
            className="tw-text-gray-300 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-regular fa-circle-check"></i>
          </a>
        </li>
        <li className="tw-relative">
          <a
            className="tw-text-gray-300 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-solid fa-list"></i>
          </a>
        </li>
      </ul>

      <ul className=" tw-absolute tw-left-0 tw-bottom-2  tw-m-0 tw-list-none tw-py-[0.2rem] tw-w-full">
        <li className="tw-relative">
          <a
            className="tw-text-gray-300 hover:tw-bg-white/10 hover:tw-outline-none
             focus:tw-bg-white/10 active:tw-bg-white/10 hover:tw-text-gray-300
              active:tw-outline-none tw-w-full tw-h-12 tw-flex tw-items-center tw-justify-center
              tw-cursor-pointer"
          >
            <i className="fa-solid fa-gear"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
