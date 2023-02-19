import Todo from "./../models/Todo";
import Card from "./common/Card";
import { ImRadioChecked2 } from "react-icons/im";
import { TodoContext } from "./../context/TodoProvider";
import { useContext } from "react";

type CompletedTaskProps = {
  items: Todo[] | undefined;
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {item.done && (
            <Card item={item} style=" bg-yellow-200">
              <button onClick={() => todoContext?.doneTodo(item)}>
                <ImRadioChecked2 className=" text-white" />
              </button>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;
