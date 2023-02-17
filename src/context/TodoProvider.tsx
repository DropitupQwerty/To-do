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

export const TodoContext = createContext<TodoContextProviderType | any>("");

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = async (todos: string) => {
    await addTodoCall(todos)
      .then((res) => {
        setTodo([...todo, res]);
      })
      .catch((err) => console.log(err));
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

  const updateTodo = (todos: Todo) => {
    console.log(todos);
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, deleteTodo, doneTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
