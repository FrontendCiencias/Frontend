import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../functions/auth.function";

export const authSlice = createSlice ({
  name: 'auth',
  initialState: getUser(),
  reducers: {
    changeUser: (state, action) => {
      state = action.payload
      return state
    }
  },
})

export const { changeUser } = authSlice.actions

export default authSlice.reducer