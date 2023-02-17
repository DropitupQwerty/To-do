import { useState, useContext, useEffect } from "react";
import Todo from "./models/Todo";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { isError, useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./services/todoService";
import { TodoContext } from "./context/TodoProvider";

function App() {
  const todoContext = useContext(TodoContext);
  const [values, setValues] = useState<string>("");

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  useEffect(() => {
    todoContext.setTodo(todos);
  }, [todos]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues(event.target.value);
  };

  const onSubmit = () => {
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
