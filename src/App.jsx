import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Home, Recipe, Recipes } from "./pages";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/recipes", element: <Recipes /> },
        { path: "/recipe/:id", element: <Recipe /> },
        { path: "/create", element: <CreateRecipe /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
