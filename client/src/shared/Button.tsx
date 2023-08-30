import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  children: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
};

const Button = ({ children, onClick, type = "button" }: Props) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
