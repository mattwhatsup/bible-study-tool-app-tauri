import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'remote-redux-devtools'
import { counterReducer } from '../features/counter/counterSlice'
import { layoutReducer } from '../features/layout/layoutSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
  devTools: false,
  enhancers: [
    devToolsEnhancer({ realtime: true, hostname: 'localhost', port: 8000 }),
  ],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
