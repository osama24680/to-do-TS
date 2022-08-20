import React from "react";
import { TodoModel } from "./Model";
import "./Styles.scss";
import SingleList from "./SingleList"
interface props {
  todoArray: TodoModel[];
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
const TodoList: React.FC<props> = ({ todoArray, setTodoArray }: props) => {
  return (
    <div className="todoList">
      {todoArray.map((item) => (
        <SingleList item={item} key={item.id} todoArray={todoArray} setTodoArray={setTodoArray}/>
      ))}
    </div>
  );
};

export default TodoList;
