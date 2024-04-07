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
            <h3 className="text-2xl font-semibold text-red-400 mb-6">Cuisines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cuisine.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                        </div>
                        <div className="mt-auto bg-black text-white text-center py-2 rounded-b-lg">
                                <Link to={`/recipe/${recipe.id}`} className="block">View Recipe</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cuisine;
