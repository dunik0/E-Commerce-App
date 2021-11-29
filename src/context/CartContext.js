import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import AddToCartOverlay from '../components/AddToCartOverlay/AddToCartOverlay';

const CartContext = React.createContext({
  countCartItems: 0,
  cartItems: [],
  countLikedItems: 0,
  likedItems: [],
  addToLiked: () => {},
  addToCart: () => {},
  toggleCartOverlay: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [isOverlowShown, setIsOverlowShown] = useState(false);
  const [overlayItem, setOverlayItem] = useState(null);

  useEffect(() => {
    if (isOverlowShown) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOverlowShown]);

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
    setCartItems((prevState) => {
      const cart = [...prevState];
      cart.push({ id, quantity });
      return cart;
    });
  };

  const toggleCartOverlay = (data) => {
    setIsOverlowShown((prevState) => !prevState);
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

  console.log(cartItems, countCartItems);
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
      }}
    >
      {isOverlowShown
        ? ReactDOM.createPortal(
            <AddToCartOverlay item={overlayItem} />,
            document.getElementById('root-overlay'),
          )
        : null}
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
