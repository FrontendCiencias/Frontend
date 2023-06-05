import { createSlice } from "@reduxjs/toolkit";
import { searchAllStudents } from "../../api/secretary.api";

export const studentsSlice = createSlice ({
  name: 'students',
  initialState: await searchAllStudents(),
  reducers: {

  },
})

export default studentsSlice.reducer