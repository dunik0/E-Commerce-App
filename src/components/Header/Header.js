import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Categories from './Categories';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';
import MenuIcon from './MenuIcon';
import SlidingMenu from './SlidingMenu';
import Logo from './Logo';
import ProductsContext from '../../context/ProductsContext';

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [slidingMenuWidth, setSlidingMenuWidth] = useState('0%');
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const menuRef = useRef();
  const { categories } = useContext(ProductsContext);

  const toggleMenu = () => {
    setIsMenuShown((prevState) => !prevState);
    if (!isMenuShown) menuRef.current.scrollTop = '0';
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlidingMenuWidth(isMenuShown ? '100%' : '0%');
    }, 1);

    if (isMenuShown) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';

    return () => clearTimeout(timeout);
  }, [isMenuShown]);

  return (
    <HeaderContainer onClick={isMenuShown ? toggleMenu : null}>
      {isMobile ? (
        <>
          <Row>
            <MenuIcon toggleMenu={toggleMenu} isMenuShown={isMenuShown} />
            <Logo />
            <NavIcons />
          </Row>
          <SearchBar />
          <SlidingMenu
            categories={categories}
            width={slidingMenuWidth}
            menuRef={menuRef}
          />
        </>
      ) : (
        <>
          <Row>
            <SearchBar />
            <Logo />
            <NavIcons />
          </Row>
          <Categories categories={categories} />
        </>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: min(980px, 100%);
  height: 110px;
  box-shadow: 0 1px rgb(0 0 0 / 5%);
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
`;

export default Header;
