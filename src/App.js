import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/products/:id",
    element:<Products/>
  },
  {
    path:"/product/:id",
    element:<Product/>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />!
    </div>
  );
}

export default App;
