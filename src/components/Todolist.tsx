import Todo from "../models/Todo";

interface TodoListProps {
  items: Todo[];
  onDelete: (id: number) => void;
  onChecked: (id: number) => void;
}

function TodoList({ items, onDelete, onChecked }: TodoListProps) {
  return (
    <div>
      <div className="m-2">
        {items.map((item) => (
          <>
            {item.isDone ? null : (
              <div className="max-w-lg shadow bg-red-100 rounded-sm p-5 flex justify-between">
                <div>{item.text}</div>
                <button onClick={() => onChecked(item.id)}>DONE</button>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="m-2">
        <div>
          <h1>Completed</h1>
        </div>
        <div className="">
          {items.map((item) => (
            <>
              {item.isDone ? (
                <div className=" max-w-lg shadow bg-transparent rounded-sm p-5 flex justify-between">
                  <div className="line-through">{item.text}</div>
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
