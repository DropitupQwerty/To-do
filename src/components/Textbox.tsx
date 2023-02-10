import Button from "./common/Button";

type TextboxProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const Textbox = ({ value, handleChange, onSubmit }: TextboxProps) => {
  return (
    <div className="m-4 w-full">
      <input
        className="w-full outline-none p-3"
        type="text"
        onChange={handleChange}
        value={value}
      ></input>
    </div>
  );
};

export default Textbox;
