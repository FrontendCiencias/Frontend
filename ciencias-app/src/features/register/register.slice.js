import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice ({
  name: 'register',
  initialState: {
    parents:[{
      "names": { 
        "name1": "Pedro",
        "name2": "Pablo",
        "surname1": "Madero",
        "surname2": "Sutran" 
      },
      "genre": "M",
      "dni": "99887766",
      "address": "Santa Maria",
      "phone": 999888777,
      "relationship": "Padre"
    },],
    students:[]
  },
  reducers: {
    addParent: (state, action) => {
      state.parents.push(action)
      return state
    }
  },
})

export const { addParent } = registerSlice.actions
export default registerSlice.reducer