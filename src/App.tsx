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
console.log(colors)

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [drop1, setDrop1] = useState<number | undefined>()
  const [drop2, setDrop2] = useState<Array<number> | undefined>()

  const [selected, setSelected] = useState<SelectValue>({
    book: 811335,
    chapter: 1,
  })

  const [text, setText] = useState('')

  return (
    <div className="w-screen h-screen bg-white dark:bg-black ">
      <Button
        purpose="warning"
        rounded="lg"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-5 h-5"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        }
        className=" p-2.5"
      ></Button>
      <OutLineButton
        purpose="dark"
        rounded="lg"
        size="xs"
        icon={<i className="fa-solid fa-home mr-1" />}
        className=" p-2.5"
      >
        aaa
      </OutLineButton>
      <Button
        purpose="primary"
        rounded="md"
        iconPosition="right"
        icon={<i className="fa-solid fa-check ml-1" />}
      >
        OK
      </Button>
      <GradientButton
        direction="r"
        fromClassName="from-red-200"
        toClassname="to-blue-400"
        rounded="full"
      >
        haha
      </GradientButton>
      <OutLineButton purpose="primary" size="xs" rounded="full">
        ok
      </OutLineButton>
      <OutLineButton purpose="secondary" size="xs" rounded="full">
        查看
      </OutLineButton>
      <OutLineButton purpose="light" size="xs">
        个人档案
      </OutLineButton>
      <DropDownButton
        items={['item1', 'item2', 'item3']}
        selectedIndex={drop1}
        onItemClick={(index) => {
          console.log(index)

          setDrop1(index)
        }}
        itemRender={({ item, index, selected = false, onItemClick }) => (
          <Menu.Item key={index}>
            {({ active, close }) => (
              <a
                className={`${
                  active ? 'bg-violet-500 text-white' : '  text-gray-900'
                } group w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer inline-flex justify-between`}
                onClick={(e) => {
                  e.preventDefault()
                  onItemClick?.(index)
                  close()
                }}
              >
                {item}
                <i className={`fa-solid ${selected ? 'fa-check' : ''}`} />
              </a>
            )}
          </Menu.Item>
        )}
        label="选项"
      />

      <DropDownButton
        items={['item1', 'item2', 'item3']}
        multi
        justifyRight
        selectedIndex={drop2}
        onItemClick={(index) => {
          const v = drop2 || []
          if (v.includes(index)) {
            setDrop2(v.filter((n) => n != index))
          } else {
            setDrop2([...v, index])
          }
        }}
        itemRender={({ item, index, selected = false, onItemClick }) => (
          <Menu.Item key={index}>
            {({ active, close }) => (
              <a
                className={`${
                  active ? 'bg-violet-500 text-white' : '  text-gray-900'
                } group w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer inline-flex justify-between`}
                onClick={(e) => {
                  e.preventDefault()
                  onItemClick?.(index)
                  close()
                }}
              >
                {item}
                <i className={`fa-solid ${selected ? 'fa-check' : ''}`} />
              </a>
            )}
          </Menu.Item>
        )}
        label="选项2"
      />

      <Button purpose="light" size="xs" rounded="xl" shadowless>
        my homepage
      </Button>
      <Button purpose="primary" rounded="xl" size="xl" isBlock>
        确认
      </Button>

      <Button purpose="link" size="3xl">
        联系方式
      </Button>
      <Button purpose="link" size="xs">
        地址
      </Button>
      <Button purpose="primary" size="xs" rounded="xl" shadowless>
        提交
      </Button>

      <div>
        <button
          type="button"
          className="text-white text-cool-gray bg-gradient-to-br from-red-200 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Purple to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Cyan to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Green to Blue
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Purple to Pink
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Pink to Orange
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Teal to Lime
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Red to Yellow
        </button>
      </div>

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
