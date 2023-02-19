import React, { useState, useContext } from "react";
import DeleteButton from "./DeleteButton";
import Todo from "./../../models/Todo";
import { BiPencil } from "react-icons/bi";
import UpdateSelectedModal, { toggleDisplay } from "./../UpdateSelectedModal";
import { useAtom, useSetAtom, useAtomValue } from "jotai";

type CardProps = {
  item: Todo;
  style: string;
  children: React.ReactNode;
};

function Card({ children, item, style }: CardProps) {
  const [display, setDisplay] = useAtom(toggleDisplay);

  const lineThrough = () => {
    if (item.done) return "line-through";
  };
  const updateSelected = () => {
    console.log(display);

    setDisplay(display === "hidden" ? "block" : "hidden");
  };

  return (
    <div
      className={`m-1 max-w-lg shadow bg-yellow-200 rounded-md p-3 flex justify-between ${style} relative items-center `}
    >
      <UpdateSelectedModal />
      <div
        className={`outline-none bg-transparent w-full text-sm ${lineThrough()} `}
      >
        {item.text}
      </div>
      <div
        onClick={updateSelected}
        className="absolute right-0 rounded-md select-none w-full h-full bg-white cursor-pointer opacity-0 hover:opacity-40 text-sm flex justify-center items-center"
      >
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
