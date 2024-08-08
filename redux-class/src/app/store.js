import { configureStore } from '@reduxjs/toolkit'
import todoReduces from "../features/todo/todoSlice"
export const store = configureStore(
    {
        reducer: todoReduces,
    }
);