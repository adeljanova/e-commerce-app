import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobilePhones from "./pages/Products_1/Products_1";
import SmartWatches from "./pages/Products_2/Products_2";

const router = createBrowserRouter([
  { path: "/mobile-phones", element: <MobilePhones /> },
  { path: "/smart-watches", element: <SmartWatches /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
