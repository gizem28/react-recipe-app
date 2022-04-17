import React, { useState} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, MainContainer, ImgDiv } from "./HomeStyle";
import homesvg from "../../assets/Recipe App6.png";
import RecipeCardComp from "./RecipeCardComp";


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "757e49e0";
const APP_KEY = "e408a6d42691def7ea7a5fd7f0b2c63b";
const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  
  const getData = async () => {
      if (query !== "") {
      const result = await axios.get(url);
      // if (result.data.more) {
      //   alert("The type of food you are looking for is not available. Try again");
      // }
      setRecipes(result.data.hits);
      // console.log(result.data.hits);
      setQuery("")
      }
      else {alert("Please fill the form");}
  }
 
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homesvg} />
        </ImgDiv>
      )}
    </div>
  );
};
export default Home;