import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Sidebar from './components-ui/Sidebar'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import DropDownButton from './components-ui/DropDownButton'
import BibleSelector from './components-ui/BibleSelector'
import { bibleApi } from './app/api'
import { SelectValue } from './components-ui/BibleSelector/BibleDropDown'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [selected, setSelected] = useState<SelectValue>({
    book: 811335,
    chapter: 1,
  })
  return (
    <div className="w-screen h-screen bg-green-400">
      <BibleSelector
        selected={selected}
        onChange={(selected) => {
          setSelected(selected)
        }}
      />
      <button
        onClick={async () =>
          console.log(JSON.stringify(await bibleApi.queryAllBooks()))
        }
      >
        all book
      </button>{' '}
      <button
        onClick={async () =>
          console.log(
            JSON.stringify(await bibleApi.queryAllChapterVersesCount()),
          )
        }
      >
        all chapter verses count
      </button>
    </div>
  )
}

export default App
