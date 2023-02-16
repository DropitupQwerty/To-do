import axios from "axios";
import Todo from "./../models/Todo";

const apiEndPoint = "http://localhost:9191";

type AddTodoProps = {
  todo: Todo[];
};

export const fetchTodos = async () => {
  const response = await axios.get(apiEndPoint + "/todos");
  const todos = response.data;
  return todos;
};

export const addTodo = async (todo: Todo) => {
  const response = await axios
    .post<any>(apiEndPoint + "/addTodo", {
      text: todo.text,
      done: false,
    })
    .then((res) => console.log(res.data));
};
