import Todo from "./../models/Todo";
import { ImRadioUnchecked } from "react-icons/im";
import Card from "./common/Card";
import { useContext } from "react";
import { TodoContext } from "./../context/TodoProvider";

interface OngoingProps {
  items: Todo[];
}

const Ongoing = ({ items }: OngoingProps) => {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {!item?.done && (
            <Card item={item} style="hover:bg-red-100 bg-red-200">
              <button onClick={() => todoContext.doneTodo(item)}>
                <ImRadioUnchecked className="text-white" />
              </button>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
