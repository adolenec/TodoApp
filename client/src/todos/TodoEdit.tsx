import { useParams } from "react-router-dom";
import { useGetTodo, useUpdateTodo } from "../hooks/TodoHooks";
import ApiError from "../shared/ApiError";
import TodoForm from "./TodoForm";
import LoadingSpinner from "../shared/LoadingSpinner";

const TodoEdit = () => {
  const { id } = useParams();
  if (!id) throw Error("Todo not found");
  const { data, error, isError, isLoading } = useGetTodo(+id);
  const updateTodo = useUpdateTodo();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ApiError error={error} />;

  return (
    <TodoForm
      todo={data}
      title="Edit Todo"
      submitForm={(todo) => updateTodo.mutate(todo)}
    />
  );
};

export default TodoEdit;
