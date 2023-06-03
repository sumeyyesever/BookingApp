import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/hotels",
    element: <List />
  },
  {
    path: "/hotels/:id",
    element: <Hotel />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
