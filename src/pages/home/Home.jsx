import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const url = "http://localhost:3000/recipes";
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && (
        <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {error && <h3>{error}</h3>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Home;
