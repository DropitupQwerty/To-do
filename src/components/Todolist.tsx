import Todo from "../models/Todo";
import CompletedTask from "./CompletedTask";
import Ongoing from "./Ongoing";
import { Header } from "./common/Heading";

interface TodoListProps {
  items: Todo[] | any;
}

function TodoList({ items }: TodoListProps) {
  return (
    <div className="w-9/12 flex justify-evenly max-sm:flex-col">
      <div className="w-full">
        <Header value="To-do" />
        <Ongoing items={items} />
      </div>
      <div className="w-full">
        <Header value="Completed" />
        <CompletedTask items={items} />
      </div>
    </div>
  );
}

export default TodoList;
