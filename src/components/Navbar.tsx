import { useContext } from "react";
import { TodoContext } from "./../context/TodoProvider";

const Navbar = () => {
  return (
    <div className="p-8 ">
      <div>
        <h1 className="font-bold text-cyan-400 text-5xl ">To-Do</h1>
        <span>List Something new</span>
      </div>
    </div>
  );
};
export default Navbar;
