import { FunctionComponent } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { selectLayout } from '../features/layout/layoutSlice'
import SidebarCoumn from './SidebarCoumn'
import ContentBoard from './ContentBoard'

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  const layout = useSelector(selectLayout)

  return (
    <div className=" w-screen h-screen">
      <Sidebar></Sidebar>
      <div className="flex">
        <div className="ml-12 h-screen"></div>
        {layout.showSidebarColumn && <SidebarCoumn />}
        <ContentBoard />
      </div>
    </div>
  )
}

export default Layout
