import { useSelector } from "react-redux"
export default function todo(){
   const todos =  useSelector((state) => state.todos);
   console.log(todos);
    return(
        <>
           <h3>Todo</h3>
           <ul>
            {todos.map((todo)=>(<li key={todo.id}>{todo.task}</li>))}
           </ul>
        </>
    )
}