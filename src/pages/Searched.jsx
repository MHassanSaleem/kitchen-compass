import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold text-red-400 mb-6">Following Matches Found</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {searchedRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{recipe.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searched;
