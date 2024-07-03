import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  programs: [],
}

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    addProgram: (state, action) => {
      state.programs = action.payload
    },
  },
})

export const { addProgram } = programSlice.actions

export default programSlice.reducer