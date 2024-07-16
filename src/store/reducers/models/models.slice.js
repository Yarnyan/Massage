import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  models: [],
  chosenModel: null,
};

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setModels: (state, action) => {
      state.models = action.payload;
    },
    chooseModel: (state, action) => {
      state.chosenModel = action.payload;
    },
  },
});

export const { setModels, chooseModel } = modelSlice.actions;
export default modelSlice.reducer;
