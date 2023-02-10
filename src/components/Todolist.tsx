import Todo from "../models/Todo";
import CompletedTask from "./CompletedTask";
import Ongoing from "./Ongoing";
import Heading from "./common/heading";

interface TodoListProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

function TodoList({ items, onChecked }: TodoListProps) {
  return (
    <div className="w-9/12">
      <div>
        <Ongoing onChecked={onChecked} items={items} />
      </div>
      <div className="mt-5">
        <CompletedTask items={items} />
      </div>
    </div>
  );
}

export default TodoList;
