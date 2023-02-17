import { useState, useContext, useEffect } from "react";
import Todo from "./models/Todo";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./services/todoService";
import { TodoContext } from "./context/TodoProvider";

function App() {
  const initialValues = {
    id: null,
    text: "",
    done: false,
  };

  const [values, setValues] = useState<Todo>(initialValues);
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const todoContext = useContext(TodoContext);

  const doneTodo = (id: number) => {
    console.log(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, text: event.target.value });
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
            values={values.text}
            handleChange={handleChange}
            handleSubmit={onSubmit}
          />
        </div>
        <div className="flex justify-center">
          <TodoList items={todos} onChecked={doneTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
