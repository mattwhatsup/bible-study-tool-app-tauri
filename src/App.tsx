import { FunctionComponent } from 'react'
import BibleSelector from './components-ui/BibleSelector/BibleSelector'
import BookDropDown from './components-ui/BibleSelector/BookDropDown'
import BookPopupSelector from './components-ui/BibleSelector/BookPopupSelector'
import ChapterDropDown from './components-ui/BibleSelector/ChapterDropDown'
import VerseDropDown from './components-ui/BibleSelector/VerseDropDown'
import Tabs from './components-ui/Tabs'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <Tabs />
      <div className=" tw-h-6"></div>
      <div className=" tw-absolute tw-left-32 ">
        {/* <VersionDropDown /> */}
        <BibleSelector />
      </div>
      {/* <BookPopupSelector /> */}
    </div>
  )
}

export default App
