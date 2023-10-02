import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/Todo.slices";
export const store =configureStore({
    reducer:{
        todo: TodoSlice.reducer
    },
});