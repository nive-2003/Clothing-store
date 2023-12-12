import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive"

const Container = styled.div`
height:60vh;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.div`
font-size: 50px;
margin-bottom: 25px;
`
const Description= styled.div`
font-size: 24px;
font-weight: 100;
margin-bottom: 30px;
${mobile({ textAlign:"center" })}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: antiquewhite;
display: flex;
justify-content: space-between;
border: 1px solid lightgoldenrodyellow;
${mobile({ width:"80%" })}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex:1;
border: none;
background-color: blueviolet;
color: white;
`
const Newsletter= () => {
  return (
<Container>
    <Title> NEWSLETTER </Title>
        <Description>Get Updates from ur favourite products</Description>
         <InputContainer>
         <Input placeholder="Ur email"/>
         <Button>
           <Send/>
         </Button>
         </InputContainer>
        
 
</Container>
  )
}

export default Newsletter