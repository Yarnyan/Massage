import { createSlice } from '@reduxjs/toolkit';
import { setAppStateWithExpiry, getAppStateWithExpiry } from '../../../helpers/appState';

const reviews = getAppStateWithExpiry("reviews");

const initialState = {
  reviews
}

export const reviewsSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
      setAppStateWithExpiry("reviews", action.payload);
    },
  }
})

export const { setReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer; 