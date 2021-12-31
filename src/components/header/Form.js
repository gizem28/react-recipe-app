import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle'

const Form = ({setQuery, query, getData, mealTypes, setMeal, meal }) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        getData()
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder='Search'/>
            <Button>Search</Button>
            <Select name="mealTypes"
            id="mealTypes"
            onChange={(e)=>setMeal(e.target.value)}>
               {mealTypes?.map((item,index)=>(
                  <option key={index} value={item.toLowerCase()}>
                      {item}
                  </option>
               ))}
            </Select>
        </FormContainer>
    )
}

export default Form
