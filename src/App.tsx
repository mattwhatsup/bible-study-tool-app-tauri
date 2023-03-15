import { FunctionComponent } from 'react'
import BookPopupSelector from './components-ui/BibleSelector/BookPopupSelector'
import Tabs from './components-ui/Tabs'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <Tabs />

      <div className=" tw-h-6"></div>
      <BookPopupSelector />
    </div>
  )
}

export default App
