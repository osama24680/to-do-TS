import React, { useRef } from "react";
import "./Styles.scss";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleSubmit }: props) => {
  let inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e)=>{handleSubmit(e);inputRef.current?.blur()}}>
      <input
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="enter a task"
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
