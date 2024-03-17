import { useEffect, useState } from "react";

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getpopular();
  },[])

  //fetching recipes from spoonacular
  const getpopular = async () =>{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`
      );
    const data= await api.json();
    setPopular(data.recipes);
  }

  return (
    <div>
      {popular.map((recipe) => {
        return(
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Popular