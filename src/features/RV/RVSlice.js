import { createSlice } from '@reduxjs/toolkit'

export const RVSlice = createSlice({
  name: 'counter',
  initialState: {
    age: 0,
    weight: 0.0,
    height: 0.0,
    gender: 'male'
  },

  reducers: {
    RVchangeWeight: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.weight = action.payload
    },
    RVchangeHeight: (state, action) => {
      state.height = action.payload
    },
    RVchangeGender: (state, action) => {
      state.gender = action.payload
    },

    RVchangeAge: (state, action) => {
      state.age = action.payload  
    }
  },
})

// Action creators are generated for each case reducer function
export const { RVchangeAge, RVchangeGender, RVchangeHeight, RVchangeWeight } = RVSlice.actions

export default RVSlice.reducer