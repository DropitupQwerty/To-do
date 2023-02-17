import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { TodoContext } from "./../../context/TodoProvider";

type DeleteButtonProps = {
  id: number;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const todoContext = useContext(TodoContext);

  const onDelete = () => {
    todoContext?.deleteTodo(id);
  };

  return (
    <div>
      <button onClick={onDelete} className="text-base flex items-center m-2">
        <BsTrash className="text-red-400" />
      </button>
    </div>
  );
}

export default DeleteButton;
