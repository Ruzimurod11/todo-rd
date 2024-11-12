import React, { useState } from "react";
import { useAppDispatch } from "../hook";
import { addTodo } from "../features/todoSlice";

const Form: React.FC = () => {
   const [todo, setTodo] = useState("");
   const dispatch = useAppDispatch();

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setTodo(value);
   };

   const handleAddTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (todo.trim() !== "") {
         dispatch(addTodo(todo));
         setTodo("");
      }
   };
   return (
      <form onSubmit={handleAddTodo} className="container">
         <div className="entryarea">
            <input value={todo} type="text" onChange={handleChange} />
            <div className="labelline">Enter your todo</div>
         </div>
         <button type="submit" className="btn__add">
            Добавить
         </button>
      </form>
   );
};

export default Form;
