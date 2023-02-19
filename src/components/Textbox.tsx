import { AiOutlineArrowRight } from "react-icons/all";

type TextboxProps = {
  values: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Textbox = ({ values, handleChange, handleSubmit }: TextboxProps) => {
  return (
    <div className="mx-5  mt-4 relative">
      <form onSubmit={handleSubmit}>
        <input
          maxLength={40}
          className="w-full outline-none p-3 resize-none rounded-md my-4"
          onChange={handleChange}
          value={values}
          placeholder="Input new task here..."
        />
        <div className="flex justify-end">
          <input
            // onClick={handleSubmit}
            className="p-2 transition rounded-md bg-blue-300 hover:bg-blue-400 flex items-center text-base "
            type="submit"
            value={"Add new task"}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Textbox;
