import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
   id: number;
   title: string;
   completed: boolean;
};

type TodosState = {
   todos: Todo[];
};

const initialState: TodosState = {
   todos: [],
};

export const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         const taskTodo = {
            id: Math.random() * 100,
            title: action.payload,
            completed: false,
         };

         state.todos = [taskTodo, ...state.todos];
      },
      toggleTodoComplete: (state, action: PayloadAction<number>) => {
         const toggleTodo = state.todos.find((e) => e.id === action.payload);
         if (toggleTodo) {
            toggleTodo.completed = !toggleTodo.completed;
         }
      },
      clearCompleted: (state) => {
         state.todos = state.todos.filter((e) => e.completed === false);
      },
   },
});

export const { addTodo, toggleTodoComplete, clearCompleted } =
   todoSlice.actions;
