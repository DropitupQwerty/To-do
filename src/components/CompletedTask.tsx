import Todo from "./../models/Todo";
type CompletedTaskProps = {
  items: Todo[];
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  return (
    <div>
      <div>
        <h1>Completed</h1>
      </div>
      <div>
        {items.map((item) => (
          <>
            {item.isDone ? (
              <div className="m-2 max-w-lg shadow bg-transparent rounded-sm p-5 flex justify-between">
                <div className="line-through">{item.text}</div>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
