import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice ({
  name: 'register',
  initialState: {
    parents:[],
    students:[]
  },
  reducers: {
    addParent: (state, action) => {
      state.parents.push(action.payload)
      return state
    }
  },
})

export const { addParent } = registerSlice.actions
export default registerSlice.reducer