import { useState } from "react";
import "./App.css";
import Todo from "./models/Todo";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "list number 1 ", isDone: true },
    { id: 2, text: "Im goona kick this ass", isDone: false },
    { id: 3, text: "Saple todo list 3", isDone: true },
    { id: 4, text: "Im goona kick this asasdasdasdasdddasdass", isDone: false },
    { id: 5, text: "pontang ina", isDone: true },
    { id: 6, text: "Im goona kick this ass", isDone: false },
    { id: 6, text: "Im goona kick this ass", isDone: false },
    { id: 6, text: "Im goona kick this ass", isDone: false },
    { id: 6, text: "Im goona kick this ass", isDone: false },
    { id: 7, text: "Saple todo list 3", isDone: true },
    { id: 8, text: "Im goona kick this asasdasdasdasdddasdass", isDone: false },
  ]);
  const [value, setValue] = useState<string>("");

  const doneTodo = (id: number) => {
    console.log(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="text-xl">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Textbox value={value} handleChange={handleChange} />
        </div>
        <div className="flex justify-center">
          <TodoList items={todos} onChecked={doneTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
