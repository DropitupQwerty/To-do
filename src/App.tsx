import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./models/Todo";
import TodoList from "./components/Todolist";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "pontang ina", isDone: true },
    { id: 2, text: "Im goona kick this ass", isDone: false },
    { id: 3, text: "Saple todo list 3", isDone: true },
    { id: 4, text: "Im goona kick this asasdasdasdasdddasdass", isDone: false },
    // { id: 4, text: "Im goona kick this assds" },
    // { id: 4, text: "Im goona kick this asasds" },
    // { id: 4, text: "Im goona kick this asasds" },
    // { id: 4, text: "Im goona kick this asasdsd asds" },
    // { id: 4, text: "Im goona kick this ass" },
    // { id: 4, text: "Im goona kick this assds" },
    // { id: 4, text: "Im goona kick this aass" },
    // { id: 4, text: "Im goona kick asdasdthis ass" },
    // { id: 4, text: "Im goona kick this ass" },
    // { id: 4, text: "Im goona kick this ass" },
  ]);

  const deleteTodo = (id: number) => {
    console.log(id);
  };

  const doneTodo = (id: number) => {
    console.log("isDone" + id);
  };

  return (
    <div className="text-xl">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="flex justify-between m-3">
        <div>
          <Textbox />
        </div>
        <div>
          <TodoList items={todos} onDelete={deleteTodo} onChecked={doneTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
