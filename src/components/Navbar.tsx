const Navbar = () => {
  return (
    <div className="bg-blue-100 p-8 shadow sm flex justify-between ">
      <div>
        <h1 className="font-bold color-plain">To-Do</h1>
      </div>
      <div>
        <button>Add To-do</button>
      </div>
    </div>
  );
};
export default Navbar;
