import { FunctionComponent } from 'react'

interface SidebarIconProps {
  className: string
}

const SidebarIcon: FunctionComponent<SidebarIconProps> = ({ className }) => {
  return (
    <a
      className="text-gray-400 hover:bg-white/10 hover:outline-none
     focus:bg-white/10 active:bg-white/10 hover:text-gray-300
      active:outline-none w-full h-12 flex items-center justify-center
      cursor-pointer"
    >
      <i className={className}></i>
    </a>
  )
}

export default SidebarIcon
