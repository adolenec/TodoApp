import TodoForm from "./TodoForm";
import { useAddTodo } from "../hooks/TodoHooks";
import { TodoDetailsDto } from "../types/TodoDetailsDto";

const TodoAdd = () => {
  const addTodo = useAddTodo();
  const todo: TodoDetailsDto = {
    id: 0,
    name: "",
    description: "",
    dueDate: new Date(),
  };
  return <TodoForm todo={todo} title="Add Todo" submitForm={(todo) => addTodo.mutate(todo)} />;
};

export default TodoAdd;
