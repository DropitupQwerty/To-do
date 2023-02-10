import Todo from "./../models/Todo";
import Heading from "./common/heading";

interface OngoingProps {
  items: Todo[];
  onChecked: (id: number) => void;
}

const Ongoing = ({ items, onChecked }: OngoingProps) => {
  return (
    <div>
      <div>
        <Heading value="On-going" />
      </div>
      <div>
        {items.map((item) => (
          <>
            {item.isDone ? null : (
              <div className="m-2 max-w-lg shadow bg-red-100 rounded-sm p-5 flex justify-between">
                <div>{item.text}</div>
                <button onClick={() => onChecked(item.id)}>DONE</button>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;
