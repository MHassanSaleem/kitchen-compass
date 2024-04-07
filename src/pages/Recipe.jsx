import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    let params = useParams();

    const [details, setDetails] = useState([]);
    const fetchRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchRecipe();
    },[params.name]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={details.image} alt={details.title} className="w-full h-auto rounded-lg mb-4" />
          <div className="flex justify-center space-x-4">
            <span className="px-2 py-1 bg-green-500 text-white rounded-lg">{details.vegetarian && 'Vegetarian'}</span>
            <span className="px-2 py-1 bg-blue-500 text-white rounded-lg">{details.vegan && 'Vegan'}</span>
            <span className="px-2 py-1 bg-yellow-500 text-white rounded-lg">{details.glutenFree && 'Gluten Free'}</span>
            <span className="px-2 py-1 bg-red-500 text-white rounded-lg">{details.dairyFree && 'Dairy Free'}</span>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">{details.title}</h2>
          <p className="text-lg mb-4" dangerouslySetInnerHTML={{__html: details.summary}}></p>
          <h3 className="text-xl font-bold mb-2">Ingredients</h3>
          <ul>
            {details.extendedIngredients.map((ingredients) => <li>{ingredients.original}</li>)}
          </ul>
          <h3 className="text-xl font-bold mb-2">Instructions</h3>
          <p className="text-lg mb-4" dangerouslySetInnerHTML={{__html: details.instructions}}></p>
          <div className="mt-8">
            <a href={details.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Full Recipe</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe