import React, { useContext } from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus-icon.png';
import minusIcon from '../../assets/minus-icon.png';
import CartContext from '../../context/CartContext';

const PriceCalculator = ({ quantity, setQuantity, price }) => {
  const { formatPrice } = useContext(CartContext);

  const subtract = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const add = () => {
    setQuantity((prevState) => prevState + 1);
  };
  return (
    <Container>
      <Wraper>
        <Button src={minusIcon} onClick={quantity > 0 ? subtract : null} />
        <Text>{quantity}</Text>
        <Button src={plusIcon} onClick={add} />
      </Wraper>
      <Wraper>{formatPrice(price * quantity)}</Wraper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

const Wraper = styled.span`
  display: flex;
  align-items: center;
`;

export default PriceCalculator;
