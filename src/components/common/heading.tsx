type HeadingProps = {
  value: string;
};

const Heading = ({ value }: HeadingProps) => {
  return <h1 className="m-2">{value}</h1>;
};

export default Heading;
