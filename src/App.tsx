import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Sidebar from './components-ui/Sidebar'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className=" w-screen h-screen">
      <Sidebar></Sidebar>
    </div>
  )
}

export default App
