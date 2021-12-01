import React, { PropTypes, useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import closeIcon from '../../assets/x-icon.png';
import PriceCalculator from './PriceCalculator';
import addToCartIcon from '../../assets/shopping-basket-add-icon.png';
import { host, port } from '../../APIConfig.json';

const OverlayMobileView = ({ data, quantity, setQuantity }) => {
  const { title, id, image, price } = data;
  const { toggleCartOverlay, addToCart } = useContext(CartContext);

  return (
    <Prompt onClick={(e) => e.stopPropagation()}>
      <Close
        style={{ marginLeft: 'auto' }}
        src={closeIcon}
        onClick={toggleCartOverlay}
      />
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
    </Prompt>
  );
};

OverlayMobileView.propTypes = {};

const Prompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: min(600px, 90%);
  border-radius: 5px;
  font-family: Montserrat;
  box-shadow: 1px 1px 4px;
  padding: 0 2px 0 2px;
  width: min(400px, 90%);
`;

const Image = styled.img`
  width: min(400px, 90%);
`;

const Title = styled.span`
  width: min(400px, 90%);
  margin: 1vh 0 1vh 0;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
`;

const Button = styled.button`
  margin: 1vh 0 20px 0;
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
  width: min(400px, 89%);
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default OverlayMobileView;
