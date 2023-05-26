import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Sidebar from './components-ui/Sidebar'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Button, Switch } from '@material-tailwind/react'
import DropDownButton from './components-ui/DropDownButton'
import BibleSelector from './components-ui/BibleSelector'
import { bibleApi } from './app/api'
import { SelectValue } from './components-ui/BibleSelector/BibleDropDown'
import Modal from './components-ui/dialog/Modal'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ModalWrapper from './components-ui/dialog/ModalWrapper'
import Alert from './components-ui/dialog/Alert'
import Confirm from './components-ui/dialog/Confirm'
import Prompt from './components-ui/dialog/Prompt'
import AlertWrapper from './components-ui/dialog/AlertWrapper'
import ConfirmWrapper from './components-ui/dialog/ConfirmWrapper'
import PromptWrapper from './components-ui/dialog/PromptWrapper'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [selected, setSelected] = useState<SelectValue>({
    book: 811335,
    chapter: 1,
  })

  const [text, setText] = useState('')

  return (
    <div className="w-screen h-screen ">
      {/* <BibleSelector
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
      </button> */}
      {/* <ModalWrapper
        dialog={
          <Modal
            title={'hello'}
            content={({ onClose }) => {
              return (
                <>
                  <p>world</p>
                  <button onClick={onClose}>close</button>
                </>
              )
            }}
            closeable={false}
          />
        }
      >
        <Button>click</Button>
      </ModalWrapper> */}
      {/* <Prompt
        title={'贵庚啊？'}
        getValueFn={() => text}
        content={
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        }
        onOk={(v) => console.log('ok', v)}
        onCancel={() => console.log('cancel')}
        okColor="green"
      /> */}

      {/* <Alert
        title={'贵庚啊？'}
        message={'hahaha'}
        onOk={() => console.log('ok')}
        okColor="green"
      /> */}

      {/* <AlertWrapper message="来呀～" okColor="deep-orange">
        <button>ok</button>
      </AlertWrapper> */}

      {/* <PromptWrapper
        title={'贵庚啊？'}
        getValueFn={() => text}
        content={
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        }
        okLabel="啊。。。"
        onOk={(v) => console.log('ok', v)}
      >
        <button>提问</button>
      </PromptWrapper> */}
    </div>
  )
}

export default App
