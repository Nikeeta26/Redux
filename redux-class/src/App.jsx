import "./App.css";
import Todo from "./components/todo";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {

  return (
    <>
    <Provider store={store}>
        <Todo />
        <h2>todo</h2>
    </Provider>
    </>
  )
}

export default App
