import { FunctionComponent } from 'react'
import SwitchButton from './components-ui/SwitchButton'
import Tabs from './components-ui/Tabs'
import VersionDropDown from './components-ui/VersionDropDown'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="w-screen h-screen">
      <Tabs />
      <SwitchButton />
      <VersionDropDown />
    </div>
  )
}

export default App
