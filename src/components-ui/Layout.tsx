import { FunctionComponent } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { selectLayout } from '../features/layout/layoutSlice'

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  const layout = useSelector(selectLayout)

  return (
    <div className=" w-screen h-screen">
      <Sidebar></Sidebar>
    </div>
  )
}

export default Layout
