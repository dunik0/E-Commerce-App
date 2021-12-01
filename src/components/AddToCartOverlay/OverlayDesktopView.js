import React, { PropTypes, useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import { host, port } from '../../APIConfig.json';
import closeIcon from '../../assets/x-icon.png';
import addToCartIcon from '../../assets/shopping-basket-add-icon.png';
import PriceCalculator from './PriceCalculator';

const OverlayDesktopView = ({ data, quantity, setQuantity }) => {
  const { title, id, image, price } = data;
  const { toggleCartOverlay, addToCart } = useContext(CartContext);

  return (
    <Prompt onClick={(e) => e.stopPropagation()}>
      <Image src={`http://${host}:${port}/${image}`} />
      <Wrapper>
        <Title>{title}</Title>
        <PriceCalculator
          price={price}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Button
          onClick={() => {
            addToCart(id, quantity);
          }}
        >
          <CartIcon src={addToCartIcon} />
          <ButtonText>ADD TO CART</ButtonText>
        </Button>
      </Wrapper>
      <Close src={closeIcon} onClick={toggleCartOverlay} />
    </Prompt>
  );
};

OverlayDesktopView.propTypes = {};

const Prompt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  font-family: Montserrat;
  box-shadow: 1px 1px 4px;
  padding: 10px 10px 10px 10px;
  width: min(600px, 80%);
`;

const Image = styled.img`
  margin: 10px;
  width: min(300px, 40vh);
`;

const Title = styled.span`
  font-size: 1.3rem;
  margin-bottom: 3vh;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  margin-bottom: auto;
`;

const Button = styled.button`
  margin-top: 3vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Montserrat;
`;

const ButtonText = styled.span`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default OverlayDesktopView;
