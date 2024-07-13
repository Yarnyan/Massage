import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import usersSlice from './reducers/users/users.slice';
import { userAPI } from "./reducers/users/users.actions";

import reviewsSlice from './reducers/reviews/reviews.slice';
import { reviewAPI } from "./reducers/reviews/reviews.actions";

import { leadAPI } from "./reducers/leads/leads.actions";


const rootReducer = combineReducers({
    users: usersSlice,
    reviews: reviewsSlice,
    [userAPI.reducerPath]: userAPI.reducer,
    [reviewAPI.reducerPath]: reviewAPI.reducer,
    [leadAPI.reducerPath]: leadAPI.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware).concat(reviewAPI.middleware).concat(leadAPI.middleware)
})

setupListeners(store.dispatch);

export default store;