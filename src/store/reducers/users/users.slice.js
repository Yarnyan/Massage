import { createSlice } from '@reduxjs/toolkit';
import { setAppState, getAppState } from '../../../helpers/appState';

const currentUser = getAppState("current-user");
const is_authorised = getAppState("is_authorised") ? getAppState("is_authorised") : false;



const initialState = {
    currentUser,
    is_authorised,
    is_banned: false
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            state.is_authorised = true;
            setAppState("current-user", action.payload);
            setAppState("is_authorised", true);
        },
        ban: (state, action) => {
            state.is_banned = true;
        }
    }
})

export const { setCurrentUser, ban } = usersSlice.actions;
export default usersSlice.reducer; 