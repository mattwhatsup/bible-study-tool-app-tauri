import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { selectLayout } from '../features/layout/layoutSlice'

interface SidebarCoumnProps {}

const SidebarCoumn: FunctionComponent<SidebarCoumnProps> = () => {
  const layout = useSelector(selectLayout)
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden w-80  bg-blue-gray-200">
      SidebarCoumn {layout.activeSidebarIndex}
    </div>
  )
}

export default SidebarCoumn
