import Todo from "./../models/Todo";

type CompletedTaskProps = {
  items: Todo[];
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  return (
    <div>
      {items.map((item) => (
        <>
          {item.isDone ? (
            <div className="m-2 max-w-lg shadow bg-yellow-200 rounded-2xl p-5 flex justify-between">
              <div className="line-through">{item.text}</div>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default CompletedTask;
