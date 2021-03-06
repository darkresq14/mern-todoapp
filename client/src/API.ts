import axios, { AxiosResponse } from "axios";
import { getErrorMessage } from "./utils";

const devUrl: string = "http://localhost:4000";
const prodUrl: string = "https://darky-mern-todoapp.herokuapp.com";
// const prodPort: string = ":33147";

const baseUrl = process.env.NODE_ENV !== "production" ? devUrl : prodUrl;

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );

    return todos;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );

    return saveTodo;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };

    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    );

    return updatedTodo;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const deleteTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${todo._id}`
    );

    return deleteTodo;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
