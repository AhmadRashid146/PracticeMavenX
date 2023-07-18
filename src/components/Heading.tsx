import { ReactNode } from "react";

interface IHeading {
  children: ReactNode;
  className?:string;
}

const Heading = ({ children,className }: IHeading) => {
  return <div className={className}>{children}</div>;
};

export default Heading;
