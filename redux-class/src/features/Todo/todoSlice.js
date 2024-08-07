import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{ id: "abc", task:"demo-task", isDone: false}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reduces:{//object

        //reduces
        addTodo:(state, action) => {
            const newTodo = {
                 id:nanoid,
                 task:action.payload,
                 isDone:false
            };
             state.todos.push(newTodo); //direct mutation of array
        },
        deleteTodo:(state, action) => {
            // action.payload
            state.todos.filter((todo) => {
             return  state.todos = todo.id != action.payload;
            })
        }
    }
})