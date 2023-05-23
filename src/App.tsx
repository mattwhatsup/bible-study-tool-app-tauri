import { invoke } from '@tauri-apps/api'
import { FunctionComponent } from 'react'
import Sidebar from './components-ui/Sidebar'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import DropDownButton from './components-ui/DropDownButton'
import BibleSelector from './components-ui/BibleSelector'
import { bibleApi } from './app/api'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="w-screen h-screen bg-green-400">
      <BibleSelector />
      <button
        onClick={async () =>
          console.log(JSON.stringify(await bibleApi.queryAllBooks()))
        }
      >
        all book
      </button>
    </div>
  )
}

export default App
