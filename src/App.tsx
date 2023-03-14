import { FunctionComponent } from 'react'
import BookList from './components-ui/BookList'
import Dialog from './components-ui/Dialog'
import SwitchButton from './components-ui/SwitchButton'
import Tabs from './components-ui/Tabs'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <Tabs />
      {/*
      <SwitchButton />
      <VersionDropDown />
      <Dialog /> */}
      <div className="tw-w-52 tw-m-4 tw-border tw-p-2  tw-bg-white tw-rounded-md tw-shadow-sm">
        <BookList />
      </div>
    </div>
  )
}

export default App
