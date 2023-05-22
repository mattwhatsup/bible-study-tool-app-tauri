import { invoke } from '@tauri-apps/api'
import { FunctionComponent } from 'react'
import Sidebar from './components-ui/Sidebar'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import DropDownButton from './components-ui/DropDownButton'
import BibleSelector from './components-ui/BibleSelector/BibleSelector'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="w-screen h-screen bg-green-400">
      <BibleSelector />
    </div>
  )
}

export default App
