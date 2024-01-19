import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { SelectValue } from '../../components-ui/BibleSelector/BibleDropDown'
import { isEqual, omit } from 'lodash'
import { v4 } from 'uuid'

// Define a type for the slice state
interface BibleBrowserState {
  actived: string
  tabs: Array<{
    info: SelectValue & { uniqId: string }
    choosedVerses?: Array<number> // 选中经文
  }>
}

// Define the initial state using that type
const firstId = v4()
const initialState: BibleBrowserState = {
  actived: firstId,
  tabs: [
    {
      info: { uniqId: firstId },
    },
  ],
}

export const bibleBrowserSlice = createSlice({
  name: 'bibleBrowser',
  initialState,
  reducers: {
    addTab: (state) => {
      const newTab = { info: { uniqId: v4() } }
      state.tabs.push(newTab)
      state.actived = newTab.info.uniqId
    },
    setActived: (state, { payload: uniqId }: PayloadAction<string>) => {
      state.actived = uniqId
    },
    removeTab: (state, { payload: uniqId }: PayloadAction<string>) => {
      const index = state.tabs.findIndex((tab) => tab.info.uniqId === uniqId)
      state.tabs.splice(index, 1)
    },
    setTabInfo: (
      state,
      {
        payload: { uniqId, info },
      }: PayloadAction<{ uniqId: string; info: SelectValue }>,
    ) => {
      const index = state.tabs.findIndex((tab) => tab.info.uniqId === uniqId)

      if (
        index !== -1 &&
        !isEqual(omit(state.tabs[index].info, 'uniqId'), info)
      ) {
        state.tabs[index] = { info: { uniqId: v4(), ...info } }
      }
    },
  },
})

export const { addTab } = bibleBrowserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectActivedTab = (state: RootState) => {
  return state.bibleBrowser.tabs.find(
    (tab) => tab.info.uniqId === state.bibleBrowser.actived,
  )
}

export const bibleBrowserReducer = bibleBrowserSlice.reducer
