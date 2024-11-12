import React from "react";
import { GrCheckmark } from "react-icons/gr";
import { useAppDispatch } from "../hook";
import { toggleTodoComplete } from "../features/todoSlice";
interface TodoItemProps {
   id: number;
   title: string;
   completed: boolean;
}
const Todo: React.FC<TodoItemProps> = ({ id, title, completed }) => {
   const dispatch = useAppDispatch();
   return (
      <>
         <li
            className="todos__item"
            onClick={() => dispatch(toggleTodoComplete(id))}>
            <a href="#" className="item__text">
               <div className="circle__custom"></div>
               {completed ? <GrCheckmark className="check" /> : null}
               <p className={completed ? "item__checked" : ""}>{title}</p>
            </a>
         </li>
      </>
   );
};

export default Todo;
