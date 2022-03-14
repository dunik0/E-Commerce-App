import React, { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../context/CartContext';
import DefaultLayout from '../layouts/DefaultLayout';
import heartIcon from '../assets/heart-icon.png';
import heartFilledIcon from '../assets/heart-filled-icon.png';
import PriceCalculator from '../components/reusable/PriceCalculator';
import Details from '../components/Details/Details';

function ProductPage() {
  const location = useLocation();
  const { title, bestseller, id, image, price, shipping } = location.state.data;
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const {
    toggleCartOverlay,
    addToLiked,
    formatPrice,
    likedItems,
    getQuantityInCart,
    addToCart,
  } = useContext(CartContext);
  const isLiked = likedItems.includes(id);
  const quantityInCart = getQuantityInCart(id);
  const [quantity, setQuantity] = useState(quantityInCart || 1);
  console.log(location.state.data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <DefaultLayout>
      <Container isMobile={isMobile}>
        {bestseller && <SmallText>BESTSELLER</SmallText>}
        <Wrapper>
          <Title>{title}</Title>
          <Button
            icon={isLiked ? heartFilledIcon : heartIcon}
            onClick={() => addToLiked(id)}
          />
        </Wrapper>
        <Image isMobile={isMobile} src={image} />
        <PriceCalculator
          price={price}
          quantity={quantity}
          quantityInCart={quantityInCart}
          setQuantity={setQuantity}
          view={'vertical'}
        />
        <AddToCartButton
          onClick={() => {
            addToCart(id, quantity);
            if (quantity === 0) setQuantity(1);
          }}
          isMobile={isMobile}
        >
          <ButtonText>
            {quantityInCart
              ? quantity > 0
                ? 'UPDATE CART'
                : 'REMOVE FROM CART'
              : 'ADD TO CART'}
          </ButtonText>
        </AddToCartButton>
        {shipping && <SmallText>Ships in: {shipping}</SmallText>}
        <Details data={location.state.data} />
      </Container>
    </DefaultLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Montserrat;
  //   font-family: Poppins;

  width: 80%;
  padding: 4% 10%;
  ${({ isMobile }) =>
    isMobile
      ? `
   
    `
      : `
   
    `};
`;

const Title = styled.h1`
  font-size: 1em;
  width: auto;
  margin-right: 20px;
`;

const Text = styled.p`
  margin: 0;
`;

const SmallText = styled.div`
  margin-top: 2px;
  color: #3d3d3d;
  font-size: 0.7em;
`;

const Image = styled.img`
  ${({ isMobile }) =>
    isMobile
      ? `
  width: 100%;
  margin-bottom: 1.5rem;
  `
      : `width: 40%;`}
`;

const Button = styled.button`
  width: 24px;
  height 24px;
  cursor: pointer;
  border: none;
  background: none;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ icon }) => `background-image: url(${icon});`}
`;

const AddToCartButton = styled.button`
  background-color: black;
  padding: 0.5rem;
  border: none;
  color: white;
  width: calc(100% - 30px);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  ${({ isMobile }) =>
    isMobile
      ? `
      margin: 1.5em 0;
      width: 100%;
`
      : `
      margin-top: 3vh;
`}}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.div`
  width: 100%;
`;

export default ProductPage;
