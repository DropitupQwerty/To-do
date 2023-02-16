import Todo from "./../models/Todo";
import DeleteButton from "./common/DeleteButton";

type CompletedTaskProps = {
  items: Todo[];
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id}>
          {item.done ? (
            <div className="m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between hover:bg-yellow-100">
              <div className="line-through text-base">{item.text}</div>
              <DeleteButton id={item.id} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;
