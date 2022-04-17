import React from 'react'
import { FormContainer, Header, LoginContainer, StyledForm, StyledImg, StyledInput, StyledButton } from './LoginStyle'
import mealSvg from '../../assets/meal.svg'

const Login = () => {
  return (
    <LoginContainer>
        <FormContainer>
        <StyledImg src={mealSvg}/>
        <Header>Web Recipe</Header>
        <StyledForm>
            <StyledInput type="text" placeholder='username' required/>
            <StyledInput type="password" placeholder='password' required/>
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        </FormContainer>
    </LoginContainer>
  )
}

export default Login