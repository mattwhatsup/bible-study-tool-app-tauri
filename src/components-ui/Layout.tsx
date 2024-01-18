import { FunctionComponent } from 'react'
import Sidebar from './Sidebar/Sidebar'

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <div className=" w-screen h-screen">
      <Sidebar></Sidebar>
    </div>
  )
}

export default Layout
