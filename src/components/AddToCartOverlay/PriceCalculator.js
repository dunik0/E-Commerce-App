import React from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus-icon.png';
import minusIcon from '../../assets/minus-icon.png';

const PriceCalculator = ({ quantity, setQuantity }) => {
  const subtract = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const add = () => {
    setQuantity((prevState) => prevState + 1);
  };
  return (
    <Container>
      <Button src={minusIcon} onClick={quantity > 1 ? subtract : null} />
      <Text>{quantity}</Text>
      <Button src={plusIcon} onClick={add} />
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  align-items: center;
  width: 90%;
`;

const Button = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.span`
  min-width: 30px;
  text-align: center;
`;

export default PriceCalculator;
