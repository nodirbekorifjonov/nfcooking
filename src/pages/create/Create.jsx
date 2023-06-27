import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { data, isPending, error, addNewData } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const navigate = useNavigate();

  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewData({
      title,
      cookingTime: cookingTime + " minutes",
      method,
      ingredients,
    });
  };

  useEffect(() => {
    if (data && !error) {
      navigate("/");
    }
  }, [data, error, navigate]);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center font-bold text-3xl mb-7">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-1 flex items-center gap-x-4">
          <label
            htmlFor="ingredient"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            <span className="inline-block mb-2 ">Ingredient: </span>
            <input
              type="text"
              id="ingredient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingredient"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
            />
          </label>

          <button
            onClick={addIngredient}
            type="submit"
            className="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
        <div className="mb-3">
          Ingredients:{" "}
          <span className="italic">
            {ingredients.map((ing) => {
              return <Fragment key={ing}>{ing}, </Fragment>;
            })}
          </span>
        </div>
        <div className="mb-3">
          <label
            htmlFor="cookingTime"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cooking Time (minutes):
          </label>
          <input
            type="number"
            id="cookingTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cooking Time"
            required
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="method"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Method:
          </label>
          <textarea
            id="method"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Method"
            required
            onChange={(e) => setMethod(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
