import { useState } from "react";
import "./App.css";
import { TodoModel } from "./Components/Model";
import InputField from "./Components/InputField";
import TodoList from "./Components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<TodoModel[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim().length > 0) {
      setTodoArray([
        ...todoArray,
        { id: Math.random() * 100, todo, isDone: false },
      ]);
      setTodo("")
    }
  };
  console.log(todoArray)
  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
   
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
};

export default App;
