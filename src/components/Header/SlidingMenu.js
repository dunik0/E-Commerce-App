import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Footer from '../Footer/Footer';

const SlidingMenu = ({ categories, width, menuRef }) => {
  const menuItems = categories.map((item) => (
    <Link
      className={'menuLink'}
      to={item === 'all' ? '/' : `/category/${item}`}
      key={uuid.v4()}
    >
      {item.toUpperCase()}
    </Link>
  ));

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAnimation((prevState) => !prevState);
  //   }, 1);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <Container ref={menuRef} width={width}>
      {menuItems}
      <Footer />
    </Container>
  );
};

SlidingMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 30px;
  min-height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgba(163, 163, 163);
  font-family: Montserrat;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  &:hover {
    background-color: #998b8b;
  }
`;

const Container = styled.nav`
  overflow-y: scroll;
  position: fixed;
  top: 110px;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.2s;
  border-top: 1px solid rgba(163, 163, 163);
  ${({ width }) => `width: ${width};`}
`;

export default SlidingMenu;
