import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

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
      {recipe && (
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
            <i>{recipe.method}</i>
          </p>

          <Link
            to="/"
            className="mt-6 self-end inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default Recipe;
