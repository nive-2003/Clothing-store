import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../reponsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px"})}
`;

const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"column"})}
`;

const TopTexts = styled.div`

${mobile({ display:"flex"})}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Info = styled.div`
  flex: 1;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type=== "total" && "500"};
font-size: ${props=>props.type=== "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button``;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin:"5px 15px"})}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom:"20px"})}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Button = styled.div`
width: 100%;
padding:10px;
background-color: black;
color: white;
/* font-weight: 600; */
`;
export const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Frog
                  </ProductName>
                  <ProductId>
                    <b>Id:</b>8956131543
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPs7vnp7DC-Qn2sUT0gX6ivEaBAIPhzz_ag&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Long Sleeve Flare Dress
                  </ProductName>
                  <ProductId>
                    <b>Id:</b>8956131543
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 6.75</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -6.75</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
