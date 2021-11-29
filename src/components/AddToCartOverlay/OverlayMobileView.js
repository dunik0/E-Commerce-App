import React, { PropTypes, useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import closeIcon from '../../assets/x-icon.png';
import PriceCalculator from './PriceCalculator';
import { host, port } from '../../APIConfig.json';

const OverlayMobileView = ({ data }) => {
  const { title, id, image, price } = data;
  const { toggleCartOverlay } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <Prompt onClick={(e) => e.stopPropagation()}>
      <Close
        style={{ marginLeft: 'auto' }}
        src={closeIcon}
        onClick={toggleCartOverlay}
      />
      <Image src={`http://${host}:${port}/${image}`} />
      <Title>{title}</Title>
      <PriceCalculator quantity={quantity} setQuantity={setQuantity} />
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
  margin: 10px 0 10px 0;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
`;

export default OverlayMobileView;
