import { BsTrash } from "react-icons/bs";

type DeleteButtonProps = {
  id: number | null;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const onDelete = () => {
    console.log("Clicked" + id);
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
