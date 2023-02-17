import Todo from "./../models/Todo";
import Card from "./common/Card";

type CompletedTaskProps = {
  items: Todo[];
};

const CompletedTask = ({ items }: CompletedTaskProps) => {
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id}>
          {item.done && (
            <Card item={item} style="hover:bg-yellow-100 bg-yellow-200">
              {null}
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;
