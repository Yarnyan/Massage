import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAPI } from "./reducers/users/users.actions";
import usersSlice from './reducers/users/users.slice';


const rootReducer = combineReducers({
    users: usersSlice,
    [userAPI.reducerPath]: userAPI.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware)
})

setupListeners(store.dispatch);

export default store;