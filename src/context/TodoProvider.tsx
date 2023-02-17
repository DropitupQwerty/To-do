import { createContext, useState } from "react";
import Todo from "./../models/Todo";
import { addTodoCall, deleteTodoCall } from "./../services/todoService";

type TodoProviderProps = {
  children: React.ReactNode;
};

type TodoContextProviderType = {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};

const initialValues = [
  {
    id: 0,
    text: "",
    done: false,
  },
];

export const TodoContext = createContext<TodoContextProviderType | any>("");

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>(initialValues);

  const addTodo = (todos: Todo) => {
    const todoCopy = [...todo, todos];

    setTodo(todoCopy);
    // addTodoCall(todos);
  };

  const deleteTodo = (id: number) => {
    const deleteById = todo.filter((t) => t.id != id);
    setTodo(deleteById);

    // deleteTodoCall(id);
  };

  const doneTodo = (todos: Todo) => {
    const todoCopy = [...todo];
    const index = todo.indexOf(todos);
    todoCopy[index] = { ...todoCopy[index] };
    todoCopy[index].done = !todoCopy[index].done;
    setTodo(todoCopy);
    console.log(todo);
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, deleteTodo, doneTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
