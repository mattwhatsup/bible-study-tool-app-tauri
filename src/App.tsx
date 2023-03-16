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
      <TextInputDropDown />
    </div>
  )
}

export default App
