import { createSlice } from '@reduxjs/toolkit'

export const LVSlice = createSlice({
  name: 'counter',
  initialState: {
    weight: 0.0,
    height: 0.0,
    gender: 'Male'
  },
  reducers: {
    LVchangeWeight: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.weight = action.payload
    },
    LVchangeHeight: (state, action) => {
      state.height = action.payload
    },
    LVchangeGender: (state, action) => {
      state.gender = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { LVchangeWeight, LVchangeHeight, LVchangeGender } = LVSlice.actions

export default LVSlice.reducer