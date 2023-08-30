import classes from "./Header.module.css";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
