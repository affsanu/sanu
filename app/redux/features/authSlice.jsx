'use client';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
    isLoggedIn: localStorage.getItem("user") ? true : false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            isLoggedIn: true;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = null;
            isLoggedIn: false;
            localStorage.removeItem("user");
        },
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;