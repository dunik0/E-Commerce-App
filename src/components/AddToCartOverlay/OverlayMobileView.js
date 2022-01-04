import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import closeIcon from '../../assets/x-icon.png';
import PriceCalculator from './PriceCalculator';
import addToCartIcon from '../../assets/shopping-basket-add-icon.png';
import { host, port } from '../../APIConfig.json';

const OverlayMobileView = ({
  data,
  quantity,
  setQuantity,
  toggleCartOverlay,
  addToCart,
  inCart,
}) => {
  const { title, id, image, price } = data;

  return (
    <Prompt onClick={(e) => e.stopPropagation()}>
      <Close src={closeIcon} onClick={toggleCartOverlay} />
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
          <ButtonText>
            {inCart
              ? quantity > 0
                ? 'UPDATE CART'
                : 'REMOVE FROM CART'
              : 'ADD TO CART'}
          </ButtonText>
        </Button>
      </Wrapper>
    </Prompt>
  );
};

OverlayMobileView.propTypes = {
  data: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  toggleCartOverlay: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  inCart: PropTypes.any,
};

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

const Title = styled.div`
  width: min(400px, 90%);
  margin: 1vh 0 1vh 0;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  margin-left: auto;
`;

const Button = styled.button`
  margin: 1vh 0 20px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Montserrat;
`;

const ButtonText = styled.div`
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
