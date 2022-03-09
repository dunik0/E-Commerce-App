import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import closeIcon from '../../assets/x-icon.png';
import PriceCalculator from '../reusable/PriceCalculator';
import addToCartIcon from '../../assets/shopping-basket-add-icon.png';

const AddToCartOverlay = ({ item: { title, id, image, price } }) => {
  const { toggleCartOverlay, cartItems, addToCart, getQuantityInCart } =
    useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const quantityInCart = getQuantityInCart(id);
  const [quantity, setQuantity] = useState(quantityInCart || 1);

  return (
    <Backgound onClick={toggleCartOverlay}>
      <Prompt onClick={(e) => e.stopPropagation()} isMobile={isMobile}>
        {isMobile ? (
          <Close
            src={closeIcon}
            onClick={toggleCartOverlay}
            isMobile={isMobile}
          />
        ) : null}
        {/* <Image src={`http://${host}:${port}/${image}`} /> */}
        <Image src={image} isMobile={isMobile} />
        <Wrapper isMobile={isMobile}>
          <Title isMobile={isMobile}>{title}</Title>
          <PriceCalculator
            price={price}
            quantity={quantity}
            quantityInCart={quantityInCart}
            setQuantity={setQuantity}
          />
          <Button
            onClick={() => {
              addToCart(id, quantity);
              if (quantity === 0) setQuantity(1);
            }}
            isMobile={isMobile}
          >
            <CartIcon src={addToCartIcon} />
            <ButtonText>
              {quantityInCart
                ? quantity > 0
                  ? 'UPDATE CART'
                  : 'REMOVE FROM CART'
                : 'ADD TO CART'}
            </ButtonText>
          </Button>
        </Wrapper>
        {isMobile || (
          <Close
            src={closeIcon}
            onClick={toggleCartOverlay}
            isMobile={isMobile}
          />
        )}
      </Prompt>
    </Backgound>
  );
};

AddToCartOverlay.propTypes = {
  item: PropTypes.object.isRequired,
};

const Backgound = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Prompt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  font-family: Montserrat;
  box-shadow: 1px 1px 4px;
  ${({ isMobile }) =>
    isMobile
      ? `
      flex-direction: column;
      width: min(400px, 90%);
      padding: 0 2px 0 2px;
  `
      : `
      flex-direction: row;
      padding: 10px 10px 10px 10px;
      width: min(600px, 80%);
   `}}
`;

const Image = styled.img`
  ${({ isMobile }) =>
    isMobile
      ? `
      width: min(400px, 90%);

`
      : `
      margin: 10px;
      width: min(300px, 40vh);
 `}}
`;

const Title = styled.div`
  
  ${({ isMobile }) =>
    isMobile
      ? `
      width: min(400px, 90%);
      margin: 1vh 0 1vh 0;
      margin: 10px;
      width: min(300px, 40vh);

`
      : `
      font-size: 1.3rem;
      margin-bottom: 3vh;
`}}
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  ${({ isMobile }) =>
    isMobile
      ? `
      margin-left: auto;

`
      : `
      margin-bottom: auto;
`}}
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  ${({ isMobile }) =>
    isMobile
      ? `
      margin: 1vh 0 20px 0;

`
      : `
      margin-top: 3vh;
`}}
`;

const ButtonText = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  ${({ isMobile }) =>
    isMobile
      ? `
    width: min(400px, 89%);

`
      : ``}}
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default AddToCartOverlay;
