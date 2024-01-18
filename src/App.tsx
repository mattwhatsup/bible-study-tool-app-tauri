import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Sidebar from './components-ui/Sidebar/Sidebar'
import Layout from './components-ui/Layout'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return <Layout />
}

export default App
