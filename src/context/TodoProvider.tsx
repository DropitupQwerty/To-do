import { createContext, useState } from "react";
import Todo from "./../models/Todo";
import {
  addTodoCall,
  updateTodoCall,
  deleteTodoCall,
} from "./../services/todoService";

type TodoProviderProps = {
  children: React.ReactNode;
};

type TodoContextProviderType = {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  doneTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
};

export const TodoContext = createContext<TodoContextProviderType | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = async (text: string) => {
    return await addTodoCall(text).then((res) => {
      setTodo([...todo, res]);
    });
  };

  const deleteTodo = (id: number) => {
    const deleteById = todo.filter((t) => t.id != id);
    setTodo(deleteById);
    deleteTodoCall(id);
  };

  //Updating todos
  const doneTodo = (checkTodo: Todo) => {
    const todoCopy = [...todo];
    const index = todo.indexOf(checkTodo);
    todoCopy[index] = { ...todoCopy[index] };
    todoCopy[index].done = !todoCopy[index].done;

    console.log(todoCopy[index]);
    updateTodoCall(todoCopy[index]);
    setTodo(todoCopy);
  };

  const updateTodo = (todos: Todo) => {
    updateTodoCall(todos);
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, deleteTodo, doneTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
