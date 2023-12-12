import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from '@material-ui/icons'

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #f0e4e49e;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: 1s ease;
cursor: pointer;


`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    border-radius: 10px;
    position: relative;

    &:hover ${Info}{
     opacity: 1;
    }
`
const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: aqua;
 position: absolute;

`
const Image = styled.img`
height: 70%;
z-index: 2;

`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition:  1s ease;

  &:hover{
    background-color: aliceblue;
    transform: scale(1.4);
  }

`
const Product = ({item}) => {
  return (
    <Container>
    <Circle/>
    <Image src = {item.img}/>
    <Info>
       <Icon>
        <ShoppingCartOutlined/>
        </Icon> 
        <Icon>
        <SearchOutlined/>
        </Icon> 
        <Icon>
        <FavoriteBorderOutlined/>
        </Icon> 
    </Info>
    </Container>
  )
}

export default Product