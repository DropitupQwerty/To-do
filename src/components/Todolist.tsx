import Todo from "../models/Todo";
import CompletedTask from "./CompletedTask";
import Ongoing from "./Ongoing";
import { Heading } from "./common/Heading";

interface TodoListProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

function TodoList({ items, onChecked }: TodoListProps) {
  return (
    <div className="w-9/12 flex justify-evenly max-sm:flex-col">
      <div className="w-full">
        <Heading value="To-do" />
        <Ongoing items={items} />
      </div>
      <div className="w-full">
        <Heading value="Completed" />
        <CompletedTask items={items} />
      </div>
    </div>
  );
}

export default TodoList;
