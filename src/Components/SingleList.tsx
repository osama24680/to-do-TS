import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineRollback } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoModel } from "./Model";

type props = {
  setTodoArray: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  item: TodoModel;
  todoArray: TodoModel[];
};
const SingleList: React.FC<props> = ({ setTodoArray, item, todoArray, }: props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(item.todo);
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodoArray(todoArray.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item));
    setChecked(!checked);
  };

  const handleDelete = (id: number) => {
    setTodoArray(todoArray.filter((item) => item.id !== id));
  };

  const handleEdit = () => {
    if (!edit && !item.isDone) setEdit(!edit);
  };

  const handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    if (editToDo.trim().length > 0) {
      setTodoArray(todoArray.map((item) => item.id === id ? { ...item, todo: editToDo } : item));
      setEdit(false);
    } else {
      setTodoArray(todoArray.map((item) => item.id === id ? { ...item, todo: item.todo } : item));
      setEdit(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="form__todoList"
      onSubmit={(e) => handleSubmitEdit(e, item.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          placeholder="press enter "
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
        />
      ) : item.isDone ? (
        <s className="todo_span">{item.todo}</s>
      ) : (
        <span className="todo_span">{item.todo}</span>
      )}

      <div>
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          {checked ? <AiOutlineRollback /> : <MdDone />}
        </span>
      </div>
    </form>
  );
};

export default SingleList;
