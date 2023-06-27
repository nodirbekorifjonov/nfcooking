import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

// layouts
import RootLayout from "./layout/RootLayout";
import RecipeListLayout from "./layout/RecipeListLayout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

// CONTEXT
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="recipe" element={<RecipeListLayout />}>
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="search" element={<Search />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className={`App ${mode} font-mainCustomFont`}>
      <div className="dark:bg-[#363636] dark:text-white">
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
