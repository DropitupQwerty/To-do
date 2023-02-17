import { createContext, useState } from "react";
import Todo from "./../models/Todo";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, postTodo } from "./../services/todoService";

type TodoProviderProps = {
  children: React.ReactNode;
};

type TodoContextProviderType = {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: Todo) => void;
};

const initialValues = [
  {
    id: null,
    text: "",
    done: false,
  },
];

export const TodoContext = createContext<TodoContextProviderType | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>(initialValues);

  const addTodo = (todo: Todo) => {
    postTodo(todo);
  };

  return (
    <TodoContext.Provider value={{ todo, setTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
