import { Link } from "react-router-dom";
import { formatDate } from "../helpers";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { TodoDto } from "../types/TodoDto";
import classes from "./Todo.module.css";

type Props = {
  todo: TodoDto;
};

const Todo = ({ todo }: Props) => {
  return (
    <Link to={`${todo.id}`} className={`${classes.todo} link`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className={classes.name}>{todo.name}</p>
          <p className={classes["due-date"]}>
            Due date: {formatDate(new Date(todo.dueDate))}
          </p>
        </div>
        <div className="d-flex">
          <div className={classes["icon-container"]}>
            <FaTrashAlt style={{ color: "rgb(169, 54, 54)" }} />
          </div>
          <Link to={`${todo.id}/edit`} className={classes["icon-container"]}>
            <FaPen style={{ color: "rgb(169, 54, 54)" }} />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Todo;
