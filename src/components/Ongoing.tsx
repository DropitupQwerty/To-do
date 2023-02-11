import Todo from "./../models/Todo";
import { AiOutlineCheck } from "react-icons/all";

interface OngoingProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

const Ongoing = ({ items, onChecked }: OngoingProps) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <>
            {item.isDone ? null : (
              <div className="m-1 max-w-lg shadow bg-red-100 rounded-md flex justify-between items-center hover:bg-red-100 text-base p-3">
                <div>{item.text}</div>
                <div>
                  <button>
                    <AiOutlineCheck className="text-green-500" />
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;
