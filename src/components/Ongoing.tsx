import Todo from "./../models/Todo";
import { AiOutlineCheck } from "react-icons/all";
import Card from "./common/Card";
import { useContext } from "react";
import { TodoContext } from "./../context/TodoProvider";

interface OngoingProps {
  items: Todo[];
}

const Ongoing = ({ items }: OngoingProps) => {
  const todoContext = useContext(TodoContext);

  const isDone = (todo: Todo) => {
    todoContext.doneTodo(todo);
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {!item.done && (
            <Card item={item} style="hover:bg-red-100 bg-red-200">
              <button onClick={() => isDone(item)}>
                <AiOutlineCheck className="text-green-500" />
              </button>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
