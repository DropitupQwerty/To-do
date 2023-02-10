type ButtonProps = {
  value: string;
  onSubmit: () => void;
};

const Button = ({ onSubmit, value }: ButtonProps) => {
  return (
    <div>
      <button
        className="bg-blue-100 px-20 py-2 rounded-md shadow mt-4"
        onClick={() => onSubmit()}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
