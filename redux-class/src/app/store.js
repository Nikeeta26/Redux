import { configureStore } from '@reduxjs/toolkit'
import todoReduces from "../features/Todo/todoSlice"
export const store = configureStore(
    {
        reducer: todoReduces,
    }
);