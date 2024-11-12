import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Form from "./Form";
import Todo from "./Todo";
import { useAppDispatch, useAppSelector } from "../hook";
import { clearCompleted } from "../features/todoSlice";

const Todos: React.FC = () => {
   const [done, setDone] = useState("");
   const dispatch = useAppDispatch();
   const { todos } = useAppSelector((store) => store.todos);

   let copyTodos = todos;

   let currentNumber = copyTodos.filter((e) => e.completed === false).length;

   switch (done) {
      case "All":
         copyTodos = todos;
         break;
      case "Current":
         copyTodos = todos.filter((e) => e.completed === false);
         break;
      case "Completed":
         copyTodos = todos.filter((e) => e.completed === true);
         break;
      default:
         break;
   }

   return (
      <div className="todos">
         <Form />
         <ul className="todos__items">
            <li className="todos__item">
               <a href="#" className="item__text">
                  <FaChevronDown /> What needs to be done?
               </a>
            </li>

            {copyTodos?.map((todo) => (
               <Todo key={todo.id} {...todo} />
            ))}

            <div className="todos__item item__btns">
               <p> {currentNumber} items left</p>
               <div className="btn__check">
                  <button
                     className={done === "All" ? "page" : ""}
                     onClick={() => setDone("All")}>
                     All
                  </button>
                  <button
                     onClick={() => setDone("Current")}
                     className={done === "Current" ? "page" : ""}>
                     Active
                  </button>
                  <button
                     className={done === "Completed" ? "page" : ""}
                     onClick={() => setDone("Completed")}>
                     Completed
                  </button>
               </div>
               <button
                  className="btn__clear"
                  onClick={() => dispatch(clearCompleted())}>
                  Clear completed
               </button>
            </div>
         </ul>
         <div className="todos__bottom1"></div>
         <div className="todos__bottom2"></div>
      </div>
   );
};

export default Todos;
