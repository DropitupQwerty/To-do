type HeadingProps = {
  value: string;
};

const Heading = ({ value }: HeadingProps) => {
  return <h1 className="m-3 ">{value}</h1>;
};

export default Heading;
