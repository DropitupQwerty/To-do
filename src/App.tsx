import { useState, useContext, useEffect } from "react";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./services/todoService";
import { TodoContext } from "./context/TodoProvider";

function App() {
  const todoContext = useContext(TodoContext);
  const [values, setValues] = useState<string>("");

  const { data: todos, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  useEffect(() => {
    todoContext?.setTodo(todos);
    console.log(todos);
  }, [isSuccess]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValues(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setValues("");
    event.preventDefault();
    todoContext?.addTodo(values);
  };

  return (
    <div className="text-xl">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Textbox
            values={values}
            handleChange={handleChange}
            handleSubmit={onSubmit}
          />
        </div>
        <div className="flex justify-center">
          <TodoList items={todoContext?.todo} />
        </div>
      </div>
    </div>
  );
}

export default App;
