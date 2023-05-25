import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Router from "./shared/navigation";

function App() {
  const router = createBrowserRouter([
    {
      path: Router.HOME,
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
