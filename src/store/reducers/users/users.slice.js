import { createSlice } from '@reduxjs/toolkit';
import { setAppState, getAppState } from '../../../helpers/appState';


const currentUser = getAppState("current-user");
const is_authorised = getAppState("is_authorised") ? getAppState("is_authorised") : false;

const initialState = {
    currentUser: currentUser || null,
    phone_number: null,
    display_name: "Инкогнито",
    is_authorised: is_authorised,
    is_banned: false
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            state.is_authorised = true;
            setAppState("current-user", action.payload);
            setAppState("is_authorised", true);
        },
        setPhoneNumber: (state, action) => {
            state.phone_number = action.payload;
        },
        setDisplayName: (state, action) => {
            state.display_name = action.payload;
        },
        banUser: (state) => {
            state.is_banned = true;
        }
    }
});

export const { setCurrentUser, setPhoneNumber, setDisplayName, banUser } = usersSlice.actions;

export default usersSlice.reducer;
