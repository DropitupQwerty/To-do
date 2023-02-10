import Button from "./common/Button";
import Heading from "./common/heading";

type TextboxProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

const Textbox = ({ value, handleChange, onSubmit }: TextboxProps) => {
  return (
    <div className="m-4 w-full relative">
      <Heading value="Input To-Do" />
      <textarea
        className="w-full outline-none p-3 "
        onChange={handleChange}
        value={value}
        rows={4}
        cols={2}
      ></textarea>
      <h2 className="absolute"></h2>
    </div>
  );
};

export default Textbox;
