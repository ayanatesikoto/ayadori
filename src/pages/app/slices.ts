import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { View } from '.'

export type appState = {
  view: View,
} 

const initialState: appState = {
  view: 'top'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setView: (state: appState, action: PayloadAction<View>) => {
      state.view = action.payload
    },
  },
})

export const { setView } = appSlice.actions
export default appSlice.reducer