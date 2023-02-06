import { configureStore } from '@reduxjs/toolkit'
import assistantReducer from "../features/assistant/assistant.slice.js";

export const store = configureStore({
  reducer: {
    assistant: assistantReducer
  },
})