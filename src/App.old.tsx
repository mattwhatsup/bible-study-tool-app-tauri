import { invoke } from '@tauri-apps/api'
import { FunctionComponent } from 'react'

// import BibleSelector from './components-ui/BibleSelector/BibleSelector'
// import BookDropDown from './components-ui/BibleSelector/BookDropDown'
// import BookPopupSelector from './components-ui/BibleSelector/BookPopupSelector'
// import ChapterDropDown from './components-ui/BibleSelector/ChapterDropDown'
// import VerseDropDown from './components-ui/BibleSelector/VerseDropDown'
// import Modal from './components-ui/Modal'
// import Sidebar from './components-ui/Sidebar'
// import Tabs from './components-ui/Tabs'
// import TextInputDropDown from './components-ui/TextInputDropDown'
// import VersionDropDown from './components-ui/VersionDropDown'
import { Counter } from './features/counter/Counter'
import { BibleNameType, BibleVersion, Lang, bibleApi } from './app/api'
import { Button } from '@material-tailwind/react'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="tw-w-screen tw-h-screen">
      <Button
        size="sm"
        onClick={async () => {
          await invoke('connect')
          console.log('connected')
        }}
      >
        connect
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const names = await invoke('sample_query', { someParam: 123 })
          console.log(names)
        }}
      >
        query
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const books = await bibleApi.queryAllBooks()
          console.log(books)
        }}
      >
        all books
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const book = await bibleApi.queryBookByName(
            '马太福音',
            BibleNameType.SimplifiedChiniese,
          )
          console.log(book.ot_or_nt)
        }}
      >
        获取马太福音
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          try {
            const book = await bibleApi.queryBookByName(
              '马太',
              BibleNameType.SimplifiedChiniese,
            )
          } catch (err) {
            console.log((err as Error).message)
          }
        }}
      >
        获取马太福
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const verses = await bibleApi.queryChapterVerses(
            BibleVersion.cuvs,
            14006,
            1,
          )
          console.log(verses)
        }}
      >
        获取马太福音1章
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const sn = await bibleApi.queryStrongNumber(Lang.Greek, 4335)
          console.log(sn)
        }}
      >
        查询G4335
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const sn = await bibleApi.queryStrongNumber(Lang.Hebrew, 335)
          console.log(sn)
        }}
      >
        查询H335
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const sn = await bibleApi.queryStrongNumber(Lang.Hebrew, 14335)
          console.log(sn)
        }}
      >
        查询H14335
      </Button>

      <Button
        size="sm"
        onClick={async () => {
          const sn = await bibleApi.searchVersesContainStrongNumber(
            Lang.Hebrew,
            335,
          )
          console.log(sn)
        }}
      >
        搜索H335出现位置
      </Button>

      <Counter />
      {/* <BibleSelector /> */}
    </div>
  )
}

export default App
