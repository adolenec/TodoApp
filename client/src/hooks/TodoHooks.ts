import { useQuery } from "@tanstack/react-query";
import { TodoDto } from "../types/TodoDto";
import axios, { AxiosError } from "axios";
import Config from "../config";

const useGetTodos = () => {
  return useQuery<TodoDto[], AxiosError>(["todos"], () =>
    axios.get(`${Config.baseApiUrl}/todos`).then((res) => res.data)
  );
};

export default useGetTodos;
