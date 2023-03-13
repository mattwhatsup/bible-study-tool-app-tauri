import { FunctionComponent } from 'react'
import Tabs from './components/Tabs'
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="w-screen">
      <Tabs />
    </div>
  )
}

export default App
