import { createSlice, nanoid } from '@reduxjs/toolkit'

//initial state
const initialState = {
    todos : [{ id: "abc", task:"demo-task", isDone: false}],
}

//create slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{//object

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
             return  state.todos = todo.id !== action.payload;
            });
        },
        markAsDone:(state, action) => {
               //action.payload
               state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone = true;
                 }
               })
        }
    }
})

//create action
export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
//export slice of reduces
export default todoSlice.reducer;