import Button from "./Button";
import classes from "./ConfirmModal.module.css";

type Props = {
  title: string;
  message: string;
  confirmText: string;
  onConfirm: () => void;
  onClose: () => void;
};

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  confirmText,
  onClose,
}: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </footer>
      </div>
    </>
  );
};

export default ConfirmModal;
