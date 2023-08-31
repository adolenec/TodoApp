import { Link } from "react-router-dom";
import classes from "./Todo.module.css";
import ConfirmModal from "../shared/ConfirmModal";
import { formatDate } from "../helpers";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { TodoDto } from "../types/TodoDto";
import { useState } from "react";
import { useDeleteTodo } from "../hooks/TodoHooks";

type Props = {
  todo: TodoDto;
};

const Todo = ({ todo }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const deleteTodo = useDeleteTodo();

  const deleteClickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <Link to={`${todo.id}`} className={`${classes.todo} link`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className={classes.name}>{todo.name}</p>
            <p className={classes["due-date"]}>
              Due date: {formatDate(new Date(todo.dueDate))}
            </p>
          </div>
          <div className="d-flex">
            <div
              className={classes["icon-container"]}
              onClick={deleteClickHandler}
            >
              <FaTrashAlt style={{ color: "rgb(169, 54, 54)" }} />
            </div>
            <Link to={`${todo.id}/edit`} className={classes["icon-container"]}>
              <FaPen style={{ color: "rgb(169, 54, 54)" }} />
            </Link>
          </div>
        </div>
      </Link>
      {showModal && (
        <ConfirmModal
          title="Delete Todo?"
          message="Are you sure you want to delete this todo?"
          confirmText="Delete"
          onConfirm={() => deleteTodo.mutate(todo.id)}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Todo;
