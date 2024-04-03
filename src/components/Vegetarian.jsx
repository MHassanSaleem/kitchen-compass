import { useEffect, useState } from "react";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);
  useEffect(()=>{
    getvegetarian();
  },[])

  //fetching recipes from spoonacular
  const getvegetarian = async () =>{
    //checking if data is already in the storage before fetching everytime
    const checkStorage = localStorage.getItem('vegetarian');
    if(checkStorage){
      setVegetarian(JSON.parse(checkStorage)); // from string to array
    } else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1&tags=vegetarian`
        );
    const data= await api.json();
    //storing in local storage
    localStorage.setItem("vegetarian", JSON.stringify(data.recipes)); //from array to string
    setVegetarian(data.recipes);
    }
  };

  return (
    <div className="p-10">
      <h3 className="text-red-400">Vegetarian</h3>
      <div className="flex flex-wrap justify-center">
        {vegetarian.map((recipe) => {
            return(
              <div key={recipe.id} class="w-screen md:w-1/4 lg:w-1/5 rounded-lg p-1 m-1 hover:-translate-y-1 duration-500 shadow-md hover:shadow-red-300 hover:shadow-md shadow-sky-300 ">
                <div class="flex relative">
                  <img src={recipe.image} class="absolute inset-0 rounded-lg w-full h-full object-cover object-center opacity-90"/>
                  <div class="px-8 py-16 relative z-10 w-full bg-white opacity-0 hover:opacity-100 duration-300">
                    <h1 class="text-lg font-medium text-sky-800 mb-3">{recipe.title}</h1>
                  </div>
                </div>
              </div>
            );
        })}

      </div>
    </div>
  );
}

export default Vegetarian