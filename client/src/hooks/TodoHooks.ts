import { useQuery } from "@tanstack/react-query";
import { TodoDto } from "../types/TodoDto";
import axios, { AxiosError } from "axios";
import Config from "../config";
import { TodoDetailsDto } from "../types/TodoDetailsDto";

const useGetTodos = () => {
  return useQuery<TodoDto[], AxiosError>(["todos"], () =>
    axios.get(`${Config.baseApiUrl}/todos`).then((res) => res.data)
  );
};

const useGetTodo = (id: number) => {
  return useQuery<TodoDetailsDto, AxiosError>(["todos", id], () =>
    axios.get(`${Config.baseApiUrl}/todos/${id}`).then((res) => res.data)
  );
};

export default useGetTodos;
export { useGetTodo };
