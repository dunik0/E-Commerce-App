import React, { PropTypes, useContext, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Categories from './Categories';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';
import MenuIcon from './MenuIcon';
import SlidingMenu from './SlidingMenu';
import Logo from './Logo';

const Header = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const categories = [
    'sofas',
    'beds',
    'rugs',
    'chairs',
    'tables',
    'cabinets',
    'sofas',
    'beds',
    'rugs',
    'chairs',
    'tables',
    'cabinets',
  ];

  const toggleMenu = () => {
    setIsMenuShown((prevState) => !prevState);
  };
  console.log(isMenuShown);
  return (
    <HeaderContainer>
      {isMobile ? (
        <>
          <Row>
            <MenuIcon toggleMenu={toggleMenu} />
            <Logo />
            <NavIcons />
          </Row>
          <SearchBar />
          {isMenuShown ? <SlidingMenu categories={categories} /> : ''}
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

Header.propTypes = {};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: min(980px, 100%);
  height: 110px;
  box-shadow: 0 1px rgb(0 0 0 / 5%);
`;

const Row = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
`;

export default Header;
