import React from "react";
import DeleteButton from "./DeleteButton";
import Todo from "./../../models/Todo";

type CardProps = {
  item: Todo;
  style: string;
  children: React.ReactNode | null;
};

function Card({ children, item, style }: CardProps) {
  const cardStyle =
    "m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between " +
    style;
  return (
    <div>
      <div className={cardStyle}>
        {item.done ? (
          <div className="line-through text-base">{item.text}</div>
        ) : (
          <div className="text-base">{item.text}</div>
        )}
        <div className="flex">
          {children}
          <DeleteButton id={item.id} />
        </div>
      </div>
    </div>
  );
}

export default Card;
