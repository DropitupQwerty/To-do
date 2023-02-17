type HeadingProps = {
  value: string;
};

export const Heading = ({ value }: HeadingProps) => {
  return <h1 className="m-3 font-bold">{value}</h1>;
};
