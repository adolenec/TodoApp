import Button from "../shared/Button";
import { useState } from "react";
import { TodoDetailsDto } from "../types/TodoDetailsDto";

type Props = {
  title: string;
  todo: TodoDetailsDto;
  submitForm: (todo: TodoDetailsDto) => void;
};

const TodoForm = ({ todo, submitForm, title }: Props) => {
  const [todoItem, setTodoItem] = useState({ ...todo });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(todoItem);
  };

  return (
    <>
      <h1 className="my-4 col col-12 col-md-8 offset-md-2">{title}</h1>
      <form
        onSubmit={onSubmitHandler}
        className="col col-12 col-md-8 d-flex flex-column gap-4 my-4 offset-md-2"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={todoItem.name}
            onChange={(e) => setTodoItem({ ...todoItem, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            value={todoItem.description}
            onChange={(e) =>
              setTodoItem({ ...todoItem, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            className="form-control"
            placeholder="Due Date"
            value={new Date(todoItem.dueDate).toLocaleDateString("en-ca")}
            onChange={(e) =>
              setTodoItem({ ...todoItem, dueDate: new Date(e.target.value) })
            }
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
