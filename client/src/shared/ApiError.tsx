import { AxiosError } from "axios";
import classes from "./ApiError.module.css";

type Props = {
  error: AxiosError;
};

const ApiError = ({ error }: Props) => {
  return (
    <div className="my-4 d-flex flex-column align-items-center justify-content-center">
      <span className={classes.status}>{error.response?.status}</span>
      <span className={classes.message}>{error.message}</span>
    </div>
  );
};

export default ApiError;
