import { FunctionComponent } from 'react'
import Dialog from './components-ui/Dialog'
import SwitchButton from './components-ui/SwitchButton'
import Tabs from './components-ui/Tabs'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <Tabs />
      <SwitchButton />
      <VersionDropDown />
      <Dialog />
    </div>
  )
}

export default App
