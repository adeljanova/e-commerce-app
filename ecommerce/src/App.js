import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products_1 from "./pages/Products_1/Products_1";
import Products_2 from "./pages/Products_2/Products_2";

const router = createBrowserRouter([
  { path: "/", element: <Products_1 /> },
  { path: "/products_2", element: <Products_2 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
