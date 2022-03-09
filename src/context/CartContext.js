import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AddToCartOverlay from '../components/AddToCartOverlay/AddToCartOverlay';

const CartContext = React.createContext({
  countCartItems: 0,
  cartItems: [],
  countLikedItems: 0,
  likedItems: [],
  addToLiked: () => {},
  addToCart: () => {},
  toggleCartOverlay: () => {},
  formatPrice: () => {},
  getQuantityInCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [overlayItem, setOverlayItem] = useState(null);

  useEffect(() => {
    if (isOverlayShown) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOverlayShown]);

  const addToLiked = (id) => {
    setLikedItems((prevState) => {
      const liked = [...prevState];
      likedItems.includes(id)
        ? liked.splice(liked.indexOf(id), 1)
        : liked.push(id);
      return liked;
    });
  };

  const addToCart = (id, quantity) => {
    const newCart = [...cartItems];
    const indexInCart = newCart.findIndex((item) => item.id === id);
    console.log(indexInCart);
    if (indexInCart > -1) {
      if (quantity !== 0) newCart[indexInCart].quantity = quantity;
      else newCart.splice(indexInCart, 1);
    } else {
      if (quantity !== 0) newCart.push({ id, quantity });
    }
    setCartItems(newCart);
    if (overlayItem) toggleCartOverlay();
  };

  const toggleCartOverlay = (data) => {
    setIsOverlayShown((prevState) => !prevState);
    setOverlayItem(data);
  };

  const countCartItems =
    cartItems.length > 0
      ? cartItems.reduce(
          (prevValue, currItem) => prevValue + currItem['quantity'],
          0,
        )
      : 0;
  const countLikedItems = likedItems.length;

  const formatPrice = (price) => {
    return '$' + price + '.00';
  };

  const getQuantityInCart = (id) => {
    const inCart = cartItems.find((el) => el.id === id);
    return inCart ? inCart.quantity : null;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        likedItems,
        addToLiked,
        addToCart,
        toggleCartOverlay,
        countCartItems,
        countLikedItems,
        formatPrice,
        getQuantityInCart,
      }}
    >
      {isOverlayShown
        ? ReactDOM.createPortal(
            <AddToCartOverlay item={overlayItem} />,
            document.getElementById('root-overlay'),
          )
        : null}
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CartContext;
