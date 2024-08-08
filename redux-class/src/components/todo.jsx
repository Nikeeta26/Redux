import { useSelector , useDispatch} from "react-redux"
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
export default function todo(){
   const todos =  useSelector((state) => state.todos);
   let dispatch = useDispatch();

   const handleDelete = (id)=>{
    console.log(id,"dlete");
        dispatch(deleteTodo(id));
   };

   const handleMark = (id)=>{
    dispatch(markAsDone(id));
    
    console.log("mark as done");
   }

   console.log(todos);
    return(
        <>
        <AddForm />
           <h3>Todo</h3>
           <ul>
            {todos.map((todo)=>(<li key={todo.id}>
                <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                <button onClick={()=> handleDelete(todo.id)}>delete</button>
                <button onClick={()=>handleMark(todo.id)}>Done Task</button>
            </li>))}
           </ul>
        </>
    )
}