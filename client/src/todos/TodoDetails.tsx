import LoadingSpinner from "../shared/LoadingSpinner";
import ApiError from "../shared/ApiError";
import Button from "../shared/Button";
import ConfirmModal from "../shared/ConfirmModal";
import { Link, useParams } from "react-router-dom";
import { useDeleteTodo, useGetTodo } from "../hooks/TodoHooks";
import { formatDate } from "../helpers";
import { FaPen, FaTrash, FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";

const TodoDetails = () => {
  const { id } = useParams();
  if (!id) throw Error("Todo not found");

  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError, error } = useGetTodo(+id);
  const deleteTodo = useDeleteTodo();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ApiError error={error} />;
  }

  return (
    <>
      <div className=" my-4 row justify-content-center rounded-5 py-4">
        <div className="col col-12 col-md-8 d-flex flex-column gap-2">
          <div className="d-flex justify-content-between align-items-center">
            <h1>{data.name}</h1>
            <Link to=".." className="link">
              <FaArrowCircleLeft
                style={{ fontSize: "1.75rem", color: "rgb(169, 54, 54)" }}
              />
            </Link>
          </div>
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
            <Button
              onClick={() => {
                setShowModal(true);
              }}
            >
              <span>Delete</span>
              <FaTrash style={{ fontSize: "1.25rem" }} />
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <ConfirmModal
          title="Delete Todo?"
          message="Are you sure you want to delete this todo?"
          confirmText="Delete"
          onConfirm={() => deleteTodo.mutate(data.id)}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TodoDetails;
