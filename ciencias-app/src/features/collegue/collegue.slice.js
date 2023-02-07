import { createSlice } from "@reduxjs/toolkit";

export const collegueSlice = createSlice ({
  name: 'collegue',
  initialState: 'none',
  reducers: {
    changueCollegue: (state, action) => {
      console.log(action.payload)
      state = action.payload
      return state
    }
  },
})

export const { changueCollegue } = collegueSlice.actions

export default collegueSlice.reducer