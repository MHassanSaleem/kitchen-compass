import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getpopular();
  },[])

  //fetching recipes from spoonacular
  const getpopular = async () =>{
    //checking if data is already in the storage before fetching everytime
    const checkStorage = localStorage.getItem('popular');
    if(checkStorage){
      setPopular(JSON.parse(checkStorage)); // from string to array
    } else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`
        );
    const data= await api.json();
    //storing in local storage
    localStorage.setItem("popular", JSON.stringify(data.recipes)); //from array to string
    setPopular(data.recipes);
    }
  };

  return (
    <div className="m-2">
      <h3 className="text-red-400">Popular</h3>
      <Splide options={{ 
        perPage: 3,
        pagination: false,
        drag: "free",
        }}>
      {popular.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
              <div>
                <p>{recipe.title}</p>
                <img className="rounded-full" src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
      })}
      </Splide>
    </div>
  );
}

export default Popular