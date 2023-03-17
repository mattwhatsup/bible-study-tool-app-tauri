import { invoke } from '@tauri-apps/api'
import { FunctionComponent } from 'react'
import BibleSelector from './components-ui/BibleSelector/BibleSelector'
import BookDropDown from './components-ui/BibleSelector/BookDropDown'
import BookPopupSelector from './components-ui/BibleSelector/BookPopupSelector'
import ChapterDropDown from './components-ui/BibleSelector/ChapterDropDown'
import VerseDropDown from './components-ui/BibleSelector/VerseDropDown'
import Modal from './components-ui/Modal'
import Sidebar from './components-ui/Sidebar'
import Tabs from './components-ui/Tabs'
import TextInputDropDown from './components-ui/TextInputDropDown'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <button
        onClick={async () => {
          await invoke('connect')
          console.log('connected')
        }}
      >
        connect
      </button>

      <button
        onClick={async () => {
          const names = await invoke('query', { someParam: 123 })
          console.log(names)
        }}
      >
        query3
      </button>
    </div>
  )
}

export default App
