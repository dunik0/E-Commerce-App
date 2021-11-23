import React, { useState, useEffect, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SlidingMenu from './SlidingMenu';
import menuIcon from '../../assets/menu-icon.png';
import styled from 'styled-components';

const MenuIcon = (props) => {
  const { toggleMenu } = props;

  return (
    <Container>
      <Icon src={menuIcon} onClick={toggleMenu} />
    </Container>
  );
};

MenuIcon.propTypes = {};

const Container = styled.div`
  width: 200px;
`;

const Icon = styled.img`
  padding-left: 20px;
  width: 24px;
  height: 24px;
`;

export default MenuIcon;
