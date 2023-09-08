import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Router from "./shared/navigation";

import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // Activa la configuración automática según el ID de píxel
  debug: false, // Activa el modo de depuración
};

ReactPixel.init("TU_ID_DE_PIXEL", null, options);

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
