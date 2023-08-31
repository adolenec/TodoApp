import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoDto } from "../types/TodoDto";
import axios, { AxiosError, AxiosResponse } from "axios";
import Config from "../config";
import { TodoDetailsDto } from "../types/TodoDetailsDto";
import { useNavigate } from "react-router-dom";

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

const useAddTodo = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, TodoDetailsDto>(
    (todo) => axios.post(`${Config.baseApiUrl}/todos`, todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
        nav("/");
      },
    }
  );
};

const useUpdateTodo = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, TodoDetailsDto>(
    (todo) => axios.put(`${Config.baseApiUrl}/todos`, todo),
    {
      onSuccess: (_, todo) => {
        queryClient.invalidateQueries(["todos"]);
        nav(`/todos/${todo.id}`);
      },
    }
  );
};

const useDeleteTodo = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, number>(
    (id) => axios.delete(`${Config.baseApiUrl}/todos/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
        nav("/");
      },
    }
  );
};

export { useGetTodos, useGetTodo, useAddTodo, useUpdateTodo, useDeleteTodo };
