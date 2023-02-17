import axios from "axios";
import Todo from "./../models/Todo";

const apiEndPoint = "http://localhost:9191";

export const fetchTodos = async () => {
  const response = await axios.get(apiEndPoint + "/todos");
  const todos = response.data;
  return todos;
};

export const addTodoCall = async (todo: Todo) => {
  await axios
    .post<any>(apiEndPoint + "/addTodo", {
      text: todo.text,
      done: false,
    })
    .then((res) => console.log(res.data));
};

export const deleteTodoCall = async (id: number) => {
  console.log("deletetodocall" + `${apiEndPoint}/${id}`);
  await axios.delete(apiEndPoint + `/${id}`);
};
