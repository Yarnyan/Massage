import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../api/postApi';

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch);

export default store;