import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Todos from "../todos/Todos";
import TodoDetails from "../todos/TodoDetails";
import TodoAdd from "../todos/TodoAdd";
import TodoEdit from "../todos/TodoEdit";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="todos" />,
  },
  {
    path: "/todos",
    element: <Layout />,
    children: [
      { index: true, element: <Todos /> },
      { path: ":id", element: <TodoDetails /> },
      { path: ":id/edit", element: <TodoEdit /> },
      { path: "add", element: <TodoAdd /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
