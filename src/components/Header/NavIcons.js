import React, { useContext } from 'react';
import styled from 'styled-components';
import userIcon from '../../assets/user-icon.png';
import basketIcon from '../../assets/shopping-basket-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import LinkIcon from './LinkIcon';
import CartContext from '../../context/CartContext';
import { useMediaQuery } from 'react-responsive';

const NavIcons = () => {
  const { countLikedItems, countCartItems } = useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 400 });
  return (
    <NavContainer>
      <LinkIcon destination={'/liked'} image={heartIcon} />
      {isMobile || (
        <Counter>{countLikedItems < 99 ? countLikedItems : 99}</Counter>
      )}
      <LinkIcon destination={'/account'} image={userIcon} />
      <LinkIcon destination={'/cart'} image={basketIcon} />
      {isMobile || (
        <Counter style={{ paddingLeft: '2px' }}>
          {countCartItems < 99 ? countCartItems : 99}
        </Counter>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  width: 200px;
  justify-content: flex-end;
  align-items: center;
`;

const Counter = styled.div`
  padding-bottom: 5px;
  min-width: 10px;
  font-family: Poppins;
`;

export default NavIcons;
