import Todo from "../models/Todo";

interface TodoListProps {
  items: Todo[];
  onDelete: (id: number) => void;
  onChecked: (id: number) => void;
}

function TodoList({ items, onDelete, onChecked }: TodoListProps) {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="m-2 max-w-lg shadow bg-red-100 rounded-sm p-5 flex justify-between">
            <div>{item.text}</div>
            <button onClick={() => onChecked(item.id)}>DONE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
