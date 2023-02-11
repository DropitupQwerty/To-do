import Todo from "./../models/Todo";
import { BsTrash } from "react-icons/all";

type CompletedTaskProps = {
  items: Todo[];
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  return (
    <div>
      {items.map((item) => (
        <>
          {item.isDone ? (
            <div className="m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between hover:bg-yellow-100">
              <div className="line-through text-base">{item.text}</div>
              <button className="text-base flex items-center">
                <BsTrash className="text-red-400" />
              </button>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default CompletedTask;
