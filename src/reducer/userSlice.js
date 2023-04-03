import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: "",
        name: "",
        id:"",
        isLoading: false,
        isLogin: null,
    },
    reducers: {
        loginUser: (state, action) => {
            console.log('in loginUser', state, action)
            // state.name = action.payload.name;
            // state.id = action.payload.id;
            state.token = action.payload
            state.isLogin = true;
            console.log('in loginUser 2')
        },

        clearUser: (state) => {
            state.name = "";
            state.id = "";
            state.isLogin = false;
        },
    },
});

export const { loginUser, clearUser} = userSlice.actions;
export default userSlice;