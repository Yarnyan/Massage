import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import usersSlice from './reducers/users/users.slice';
import { userAPI } from "./reducers/users/users.actions";

import reviewsSlice from './reducers/reviews/reviews.slice';
import { reviewAPI } from "./reducers/reviews/reviews.actions";

import { leadAPI } from "./reducers/leads/leads.actions";
import modelsSlice from './reducers/models/models.slice';
import { modelAPI } from './reducers/models/models.actions';


const rootReducer = combineReducers({
    users: usersSlice,
    reviews: reviewsSlice,
    models: modelsSlice,
    [modelAPI.reducerPath]: modelAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [reviewAPI.reducerPath]: reviewAPI.reducer,
    [leadAPI.reducerPath]: leadAPI.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware).concat(reviewAPI.middleware).concat(leadAPI.middleware).concat(modelAPI.middleware)
})

setupListeners(store.dispatch);

export default store;