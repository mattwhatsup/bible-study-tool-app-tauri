import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LayoutState {
  activeSidebarIndex: number
  showSidebarColumn: boolean
}

// Define the initial state using that type
const initialState: LayoutState = {
  activeSidebarIndex: -1,
  showSidebarColumn: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebarColumn: (state) => {
      state.showSidebarColumn = !state.showSidebarColumn
    },
    setActiveSidebarIndex: (state, { payload: index }) => {
      if (index === state.activeSidebarIndex && state.showSidebarColumn) {
        state.activeSidebarIndex = -1
        state.showSidebarColumn = false
      } else {
        state.activeSidebarIndex = index
        state.showSidebarColumn = true
      }
    },
  },
})

export const { toggleSidebarColumn, setActiveSidebarIndex } =
  layoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLayout = (state: RootState) => state.layout

export const layoutReducer = layoutSlice.reducer
