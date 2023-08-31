import { Link, useParams } from "react-router-dom";
import { useGetTodo } from "../hooks/TodoHooks";
import LoadingSpinner from "../shared/LoadingSpinner";
import ApiError from "../shared/ApiError";
import { formatDate } from "../helpers";
import Button from "../shared/Button";
import { FaPen, FaTrash } from "react-icons/fa";

const TodoDetails = () => {
  const { id } = useParams();
  if (!id) throw Error("Todo not found");

  const { data, isLoading, isError, error } = useGetTodo(+id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ApiError error={error} />;
  }

  return (
    <div className=" my-4 row justify-content-center rounded-5 py-4">
      <div className="col col-12 col-md-8 d-flex flex-column gap-2">
        <h1>{data.name}</h1>
        <hr />
        <div>
          <p>Description: {data.description}</p>
          <p>Due Date: {formatDate(new Date(data.dueDate))}</p>
        </div>
        <div className="ml-auto d-flex justify-content-end gap-2">
          <Link to="edit" className="link">
            <Button>
              <span>Edit</span>
              <FaPen style={{ fontSize: "1.25rem" }} />
            </Button>
          </Link>
          <Button>
            <span>Delete</span>
            <FaTrash style={{ fontSize: "1.25rem" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
