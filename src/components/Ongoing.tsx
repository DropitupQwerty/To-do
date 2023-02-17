import Todo from "./../models/Todo";
import { AiOutlineCheck } from "react-icons/all";
import Card from "./common/Card";

interface OngoingProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

const Ongoing = ({ items }: OngoingProps) => {
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {!item.done && (
            <Card item={item} style="hover:bg-red-100 bg-red-200">
              <button>
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
