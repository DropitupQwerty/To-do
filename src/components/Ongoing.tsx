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
              <div className="m-2 max-w-lg shadow bg-red-200  rounded-2xl flex justify-between items-center ">
                <div className="p-4 w-5/6">{item.text}</div>
                <div className="m-5 ">
                  <AiOutlineCheck size={20} />
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
