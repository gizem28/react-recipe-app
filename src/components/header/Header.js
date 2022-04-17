import React from 'react'
import {HeaderContainer, MainHeader } from "./HeaderStyle"
import Form from "./Form"
import recipe from '../../assets/Recipe App2.png'

const Header = ({setQuery, query, getData, mealTypes, setMeal, meal }) => {
    return (
       <HeaderContainer>
           <MainHeader>
           <div>
                <image src={recipe}/>
            </div>
           </MainHeader>
           <Form
        setQuery={setQuery}
        query={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}/>
       </HeaderContainer>
    )
}

export default Header;
