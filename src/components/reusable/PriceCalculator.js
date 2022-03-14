import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plusIcon from '../../assets/plus-icon.png';
import minusIcon from '../../assets/minus-icon.png';
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';

const PriceCalculator = ({ quantity, setQuantity, price, quantityInCart }) => {
  const { formatPrice } = useContext(CartContext);
  const { id } = useParams();
  const listView = !id ? true : false;

  const subtract = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const add = () => {
    setQuantity((prevState) => prevState + 1);
  };
  return (
    <Container listView={listView}>
      <Column>
        {listView || <Text>Quantity</Text>}
        <Wraper>
          <Wraper className={'border'}>
            <Button
              src={minusIcon}
              onClick={
                quantityInCart
                  ? quantity > 0
                    ? subtract
                    : null
                  : quantity > 1
                  ? subtract
                  : null
              }
            />
            <Text centered={true}>{quantity}</Text>
            <Button src={plusIcon} onClick={add} />
          </Wraper>
        </Wraper>
      </Column>
      <Wraper>{formatPrice(price * quantity)}</Wraper>
    </Container>
  );
};

PriceCalculator.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  price: PropTypes.any.isRequired,
};

const Container = styled.div`
  display: flex;
  width: 100%;
  ${({ listView }) =>
    listView
      ? `
      align-items: center;
    justify-content: space-between;
  `
      : `
      flex-direction: column-reverse;

  `}
`;

const Button = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.div`
  min-width: 30px;
  ${({ centered }) => centered && 'text-align: center;'}
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  &.border {
    padding: 4px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 0.3rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 5rem;
  margin-top: 2rem;
`;

export default PriceCalculator;
