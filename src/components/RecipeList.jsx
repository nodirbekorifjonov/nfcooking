import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-3 gap-4 max-[850px]:grid-cols-2 max-[570px]:grid-cols-1">
      {recipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            className="flex flex-col rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <h1 className="mb-2 text-center text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              {recipe.title}
            </h1>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              <span className="font-bold">Cooking Time: </span>
              <i>{recipe.cookingTime}</i>
            </p>
            <div className="text-base text-neutral-600 dark:text-neutral-200">
              <span className="font-bold">Ingredients: </span>
              <i>
                {recipe.ingredients.map((ing) => {
                  return <span key={ing}>{ing}, </span>;
                })}
              </i>
            </div>
            <p className="mb-auto text-base text-neutral-600 dark:text-neutral-200">
              <span className="font-bold">Method: </span>
              <i>{recipe.method.substr(0, 100)}...</i>
            </p>

            <Link
              to={`/recipe/${recipe.id}`}
              className="mt-6 self-center inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
