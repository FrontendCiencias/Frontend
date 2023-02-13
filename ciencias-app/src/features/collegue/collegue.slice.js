import { createSlice } from "@reduxjs/toolkit";

import { getCollegue } from "../../functions/collegue.function";

export const collegueSlice = createSlice ({
  name: 'collegue',
  initialState: getCollegue(),
  reducers: {
    changeCollegue: (state, action) => {
      console.log(action.payload)
      state = action.payload
      return state
    }
  },
})

export const { changeCollegue } = collegueSlice.actions

export default collegueSlice.reducer