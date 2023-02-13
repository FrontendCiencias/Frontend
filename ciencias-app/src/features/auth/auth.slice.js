import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../functions/auth.function";

export const authSlice = createSlice ({
  name: 'auth',
  initialState: getUser(),
  reducers: {

  },
})

export default authSlice.reducer