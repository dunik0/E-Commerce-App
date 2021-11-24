import React, { useState, useEffect, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SlidingMenu from './SlidingMenu';
import menuIcon from '../../assets/menu-icon.png';
import styled from 'styled-components';

const MenuIcon = (props) => {
  const { toggleMenu, active } = props;

  return (
    <Container>
      <Icon src={menuIcon} onClick={active ? toggleMenu : null} />
    </Container>
  );
};

MenuIcon.propTypes = {};

const Container = styled.div`
  width: 200px;
`;

const Icon = styled.img`
  padding: 0 10px 0 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default MenuIcon;
