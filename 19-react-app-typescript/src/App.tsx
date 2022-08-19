import { useContext, useState } from "react";
import "./App.css";
import NewToDo from "./components/NewToDo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider, { TodosContext } from "./store/todos-context";

function App() {
  // //let itemsList =['Learn React', 'Learn Typescript'];
  // //const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  // const [todosList, setTodosList] = useState<Todo[]>([]);

  // const onAddToDoHandler = (todoText : any) =>{
  //   const todo= new Todo(todoText);
  //   setTodosList((prevState) => {
  //     return prevState.concat(todo);
  //   })
  // }

  // const onRemoveToDoHandler = (id: string) => {
  //   setTodosList((prevState) => {
  //     return prevState.filter(todo => todo.id !== id);
  //   })
  // }

  return (
    // <div >
    //   <NewToDo onAddToDo={onAddToDoHandler}/>
    //   <Todos items={todosList} onRemoveToDo={onRemoveToDoHandler} />
    // </div>

    <TodosContextProvider>
      <NewToDo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
//npx create-react-app 19-react-app-typescript --template typescript
