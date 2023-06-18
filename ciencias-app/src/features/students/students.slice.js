import { createSlice } from "@reduxjs/toolkit";
import { searchAllStudents } from "../../api/secretary.api";

export const studentsSlice = createSlice ({
  name: 'students',
  initialState: [],
  reducers: {
    setStudents: (state, action) => {
      state=action.payload
      return state
    }
  },
})

export const { setStudents } = studentsSlice.actions
export default studentsSlice.reducer