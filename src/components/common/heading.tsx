type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return <h1 className="m-2">{text}</h1>;
};

export default Heading;
