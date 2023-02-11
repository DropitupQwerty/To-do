type TextboxProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

const Textbox = ({ value, handleChange, onSubmit }: TextboxProps) => {
  return (
    <div className="mx-5  mt-4 relative">
      <textarea
        className="w-full outline-none p-3 resize-none rounded-2xl"
        onChange={handleChange}
        value={value}
        rows={3}
        placeholder="Input new task here..."
      />
      <div className="flex justify-center">
        <button className="p-2 border transition rounded-xl bg-red-400 hover:bg-cyan-500 ">
          Add Note
        </button>
        <button className="p-2 border transition rounded-xl bg-cyan-400 hover:bg-cyan-500 ">
          Custom Color
        </button>
      </div>
    </div>
  );
};

export default Textbox;
