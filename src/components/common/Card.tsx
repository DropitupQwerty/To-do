import React from "react";
import DeleteButton from "./DeleteButton";
import Todo from "./../../models/Todo";
import { BiPencil } from "react-icons/bi";

type CardProps = {
  item: Todo;
  style: string;
  children: React.ReactNode;
};

function Card({ children, item, style }: CardProps) {
  const lineThrough = () => {
    if (item.done) return "line-through";
  };

  return (
    <div
      className={`m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between ${style} relative items-center `}
    >
      <div className={`outline-none bg-transparent text-sm ${lineThrough()} `}>
        {item.text}
      </div>
      <div className="absolute right-0 rounded-md select-none w-full h-full bg-white cursor-pointer opacity-0 hover:opacity-40 text-sm flex justify-center items-center">
        <BiPencil /> Edit
      </div>

      <div className="flex mx-4 z-10">
        {children}
        <DeleteButton id={item.id} />
      </div>
    </div>
  );
}

export default Card;
