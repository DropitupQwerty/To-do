import Todo from "./../models/Todo";
import { AiOutlineCheck } from "react-icons/all";
import DeleteButton from "./common/DeleteButton";

interface OngoingProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

const Ongoing = ({ items, onChecked }: OngoingProps) => {
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {item.done ? null : (
            <div className="m-1 max-w-lg shadow bg-red-100 rounded-md flex justify-between items-center hover:bg-white text-base p-3">
              <div>{item.text}</div>
              <div className="flex">
                <button>
                  <AiOutlineCheck className="text-green-500" />
                </button>
                <DeleteButton id={item.id} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
