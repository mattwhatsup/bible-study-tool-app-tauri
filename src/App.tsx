import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Sidebar from './components-ui/Sidebar'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import DropDownButton from './components-ui/DropDownButton'
import BibleSelector from './components-ui/BibleSelector'
import { bibleApi } from './app/api'
import { SelectValue } from './components-ui/BibleSelector/BibleDropDown'
import Modal from './components-ui/Dialog/Modal'
import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import ModalWrapper from './components-ui/Dialog/ModalWrapper'
import Alert from './components-ui/Dialog/Alert'
import Confirm from './components-ui/Dialog/Confirm'
import Prompt from './components-ui/Dialog/Prompt'
import AlertWrapper from './components-ui/Dialog/AlertWrapper'
import ConfirmWrapper from './components-ui/Dialog/ConfirmWrapper'
import PromptWrapper from './components-ui/Dialog/PromptWrapper'
import Button from './components-ui/Button/Button'
import OutLineButton from './components-ui/Button/OutlineButton'
import colors from 'tailwindcss/colors'
import GradientButton from './components-ui/Button/GradientButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BibleViewTabs from './components-ui/BibleViewTabs'
console.log(colors)

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <BibleViewTabs />
    </div>
  )
}

export default App
