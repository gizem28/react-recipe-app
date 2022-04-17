import React from 'react'
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle'
import defaultImage from "../../assets/default-image.jpg"
import { useNavigate } from 'react-router-dom'

const RecipeCardComp = ({recipe}) => {
    let navigate=useNavigate()
    const moreClick=()=>{
        navigate("/details", {state: {recipe}}) //router 6 ile gelen kullanim
    }
  return (
    <RecipeCard>
        <RecipeHeader>
            {recipe.label}
        </RecipeHeader>
        <RecipeImage src={recipe?.image || defaultImage}/>
        <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  )
}

export default RecipeCardComp