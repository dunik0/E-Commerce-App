import React, { PropTypes, useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import { host, port } from '../../APIConfig.json';
import closeIcon from '../../assets/x-icon.png';
import PriceCalculator from './PriceCalculator';

const OverlayDesktopView = ({ data }) => {
  const { title, id, image, price } = data;
  const { toggleCartOverlay, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <Prompt onClick={(e) => e.stopPropagation()}>
      <Image src={`http://${host}:${port}/${image}`} />
      <Wraper>
        <Title>{title}</Title>
        <PriceCalculator quantity={quantity} setQuantity={setQuantity} />
        <Button
          onClick={() => {
            addToCart(id, quantity);
          }}
        >
          ADD TO CART
        </Button>
      </Wraper>
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
  width: min(600px, 90%);
  border-radius: 5px;
  font-family: Montserrat;
  box-shadow: 1px 1px 4px;
  padding: 0 2px 0 2px;
  width: min(600px, 80vh);
`;

const Image = styled.img`
  margin: 10px;
  width: min(300px, 40vh);
`;

const Title = styled.span`
  width: min(400px, 90%);
  margin: 10px 0 10px 0;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  margin-bottom: auto;
`;

const Button = styled.button``;

const Wraper = styled.span``;

export default OverlayDesktopView;
