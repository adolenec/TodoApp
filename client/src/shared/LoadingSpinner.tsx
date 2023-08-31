import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className="my-4 d-flex justify-content-center align-items-center">
      <div className={classes["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
