import { useEffect, useState } from "react";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const checkStorage = localStorage.getItem('vegetarian');
    if (checkStorage) {
      setVegetarian(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <h3 className="text-2xl font-semibold text-red-400 mb-6">Vegetarian</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vegetarian.map((recipe) => (
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

export default Vegetarian;
