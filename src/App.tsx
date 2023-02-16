import { useState } from "react";
import "./App.css";
import Todo from "./models/Todo";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./services/todoService";

function App() {
  const initialValues = {
    id: null,
    text: "",
    done: false,
  };

  const [values, setValues] = useState<Todo>(initialValues);
  const { data: todos, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // console.log(todos);

  const doneTodo = (id: number) => {
    console.log(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, text: event.target.value });
  };

  const onSubmit = () => {
    addTodo(values);
    console.log(values);
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
