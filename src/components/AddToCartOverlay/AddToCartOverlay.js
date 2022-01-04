import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import OverlayMobileView from './OverlayMobileView';
import OverlayDesktopView from './OverlayDesktopView';

const AddToCartOverlay = ({ item }) => {
  const { toggleCartOverlay, cartItems, addToCart } = useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const inCart = cartItems.find((el) => el.id === item.id);
  const [quantity, setQuantity] = useState(inCart ? inCart.quantity : 1);

  return (
    <Backgound onClick={toggleCartOverlay}>
      {isMobile ? (
        <OverlayMobileView
          quantity={quantity}
          setQuantity={setQuantity}
          data={item}
          toggleCartOverlay={toggleCartOverlay}
          addToCart={addToCart}
          inCart={inCart}
        />
      ) : (
        <OverlayDesktopView
          quantity={quantity}
          setQuantity={setQuantity}
          data={item}
          toggleCartOverlay={toggleCartOverlay}
          addToCart={addToCart}
          inCart={inCart}
        />
      )}
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
`;

export default AddToCartOverlay;
