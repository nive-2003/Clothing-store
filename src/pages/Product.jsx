import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from "../reponsive"

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding:"10px" ,flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
   width:100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({ height:"40vh"})}
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`


const Title = styled.h1`
font-weight: 200;
`


const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0px;
width: 50%;
${mobile({ width:"100%"})}
`

const Filter = styled.div`
 display: flex;
 align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option``


const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({ width:"100%"})}
`

const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;
`


const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 10px;
 border: 1px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 5px;
`


const Button = styled.button`
 padding: 15px;
 border: 2px solid teal;
 background-color: white;
 cursor: pointer;
 font-weight: 500;

 &:hover{
    background-color: aliceblue;
 }
`
export const Product = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/> 
       <Wrapper>
          <ImgContainer>
           <Image src="https://assets.ajio.com/medias/sys_master/root/20210601/sXUA/60b5348baeb269a9e3cea5a6/-473Wx593H-460824859-blue-MODEL.jpg"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type
                 specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged.</Desc>
            <Price> $ 20 </Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>
                        Color
                    </FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="blue"/>
                    <FilterColor color="violet"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer> 
              <Button>ADD TO CART</Button> 
            </AddContainer>
          </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
    </Container>
  )
}
