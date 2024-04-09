import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
  
    const getCuisine = async (name) =>{
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        )
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(() => {
        getCuisine(params.category);
    },[params.category]);

    return (
        <div className="container mx-auto p-10">
            <h3 className="text-2xl font-semibold text-red-400 mb-6">{params.category} Cuisines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cuisine.map((recipe) => (
                  <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-2xl transition duration-300 flex flex-col">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                    <div className="flex justify-end items-center mt-auto">
                      <Link to={`/recipe/${recipe.id}`} className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Cuisine;
