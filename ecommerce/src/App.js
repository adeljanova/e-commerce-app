import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobilePhones from "./pages/MobilePhones/MobilePhones";
import SmartWatches from "./pages/SmartWatches/SmartWatches";

const router = createBrowserRouter([
  { path: "/mobile-phones", element: <MobilePhones /> },
  { path: "/smart-watches", element: <SmartWatches /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
