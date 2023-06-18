import { configureStore } from '@reduxjs/toolkit'

import authReducer from "../features/auth/auth.slice.js";
import assistantReducer from "../features/assistant/assistant.slice.js";
import collegueSlice from '../features/collegue/collegue.slice.js';
import registerSlice from '../features/register/register.slice.js';
import studentsSlice from '../features/students/students.slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    assistant: assistantReducer,
    collegue: collegueSlice,
    register: registerSlice,
    students: studentsSlice,
  },
})