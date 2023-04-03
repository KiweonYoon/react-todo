import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
console.log(userSlice,'in slslsl')
const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
});
export default store;