import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import Todo from "./../../models/Todo";

type CardProps = {
  item: Todo;
  style: string;
  children: React.ReactNode | null;
};

function Card({ children, item, style }: CardProps) {
  const [valueUpdate, setValueUpdate] = useState<string>(item.text);

  const handleBlur = () => {
    if (valueUpdate === item.text) {
      console.log("same value");
      return;
    }
    console.log("Not the same");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueUpdate(event.target.value);
  };

  const lineThrough = () => {
    if (item.done) return "line-through";
  };
  return (
    <div className="cursor-text">
      <div
        className={`m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between ${style}`}
      >
        <input
          onBlur={handleBlur}
          className={` outline-none bg-transparent w-full text-sm ${lineThrough()} `}
          onChange={handleChange}
          value={valueUpdate}
        />

        <div className="flex mx-4">
          {children}
          <DeleteButton id={item.id} />
        </div>
      </div>
    </div>
  );
}

export default Card;
