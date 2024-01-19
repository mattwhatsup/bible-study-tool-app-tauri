import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { SelectValue } from '../../components-ui/BibleSelector/BibleDropDown'
import { isEqual } from 'lodash'

// Define a type for the slice state
interface BibleBrowserState {
  actived: number
  tabs: Array<{
    info: SelectValue
    choosedVerses?: Array<number> // 选中经文
  }>
}

// Define the initial state using that type
const initialState: BibleBrowserState = {
  actived: 0,
  tabs: [
    {
      info: {},
    },
  ],
}

export const bibleBrowserSlice = createSlice({
  name: 'bibleBrowser',
  initialState,
  reducers: {
    addTab: (state) => {
      state.actived = state.tabs.push({ info: {} }) - 1
    },
    setActived: (state, { payload: index }: PayloadAction<number>) => {
      state.actived = index
    },
    removeTab: (state, { payload: index }: PayloadAction<number>) => {
      state.tabs.splice(index, 1)
    },
    setTabInfo: (
      state,
      {
        payload: { index, info },
      }: PayloadAction<{ index: number; info: SelectValue }>,
    ) => {
      if (isEqual(state.tabs[index].info, info)) state.tabs[index] = { info }
    },
  },
})

export const { addTab } = bibleBrowserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectActivedTab = (state: RootState) =>
  state.bibleBrowser.tabs[state.bibleBrowser.actived]

export const bibleBrowserReducer = bibleBrowserSlice.reducer
