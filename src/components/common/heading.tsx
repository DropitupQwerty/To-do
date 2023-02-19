type HeadingProps = {
  value: string;
};
export const Header = ({ value }: HeadingProps) => {
  return <h1 className="m-3 font-bold">{value}</h1>;
};
