import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  className?:string;
}

const Button = ({ children, onClick, color,className, ...rest }: IButton) => {
  return (
    <button onClick={onClick} {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
