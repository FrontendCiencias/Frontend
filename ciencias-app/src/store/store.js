import { configureStore } from '@reduxjs/toolkit'
import assistantReducer from "../features/assistant/assistant.slice.js";
import collegueSlice from '../features/collegue/collegue.slice.js';

export const store = configureStore({
  reducer: {
    assistant: assistantReducer,
    collegue: collegueSlice,
  },
})