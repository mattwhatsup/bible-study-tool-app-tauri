window.global = window

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  RouterProvider,
  createBrowserRouter as createRouter,
  // createHashRouter as createRouter,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles.css'
import { store } from './app/store'
import './app/shortcuts'

import { appWindow } from '@tauri-apps/api/window'

appWindow.onResized(async () => {
  let size = await appWindow.innerSize()
  console.log('@@@app innerSize', { width: size.width, height: size.height })
})

window.onresize = () => {
  console.log('***html innerSize', {
    width: window.innerWidth,
    height: window.innerHeight,
  })
}

const router = createRouter([
  {
    path: '/*',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
)
