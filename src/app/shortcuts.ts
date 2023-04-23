import { register } from '@tauri-apps/api/globalShortcut'
import { store } from './store'

register('CommandOrControl+Shift+C', () => {
  console.log('Shortcut triggered')
  store.dispatch({
    type: 'counter/increment',
  })
})
