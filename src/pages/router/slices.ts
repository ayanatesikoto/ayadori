import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Location =  'blank' | 'top' | 'resume' | 'skills' | 'portfolio' | 'fragments'

export type routerState = {
  location: Location,
}

const initialState: routerState = {
  location: 'top' ,
}

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setLocation: (state: routerState, action: PayloadAction<Location>) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = routerSlice.actions
export default routerSlice.reducer