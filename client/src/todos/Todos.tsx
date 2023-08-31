import Button from "../shared/Button";
import Todo from "./Todo";
import LoadingSpinner from "../shared/LoadingSpinner";
import ApiError from "../shared/ApiError";
import { useGetTodos } from "../hooks/TodoHooks";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Todos = () => {
  const { data, isLoading, isError, error } = useGetTodos();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ApiError error={error} />;

  return (
    <div className=" my-4 row justify-content-center rounded-5 py-4">
      <div className="col col-12 col-md-8 d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center pr-8">
          <h1>Todos</h1>
          <div>
            <Link to="add" className="link">
              <Button>
                <span>Add</span>
                <FaPlusCircle style={{ fontSize: "1.4rem" }} />
              </Button>
            </Link>
          </div>
        </div>
        {data.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
