import { AiOutlineArrowRight } from "react-icons/all";

type TextboxProps = {
  values: string;
  handleSubmit: () => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textbox = ({ values, handleChange, handleSubmit }: TextboxProps) => {
  return (
    <div className="mx-5  mt-4 relative">
      <textarea
        className="w-full outline-none p-3 resize-none rounded-md"
        onChange={handleChange}
        value={values}
        rows={3}
        placeholder="Input new task here..."
      />
      <div className="flex justify-end">
        <button
          className="p-2 transition rounded-md bg-blue-300 hover:bg-blue-400 flex items-center text-base "
          onClick={handleSubmit}
        >
          Add new task
          <span className="hover:translate-x-2 mx-2 transition ">
            <AiOutlineArrowRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Textbox;
