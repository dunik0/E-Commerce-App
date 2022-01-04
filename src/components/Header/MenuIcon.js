import React from 'react';
import PropTypes from 'prop-types';
import menuIcon from '../../assets/menu-icon.png';
import closeIcon from '../../assets/x-icon.png';
import styled from 'styled-components';

const MenuIcon = ({ toggleMenu, isMenuShown }) => {
  const isActive = !isMenuShown;
  return (
    <Container>
      <Icon
        src={isMenuShown ? closeIcon : menuIcon}
        onClick={isActive ? toggleMenu : null}
      />
    </Container>
  );
};

MenuIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuShown: PropTypes.bool.isRequired,
};

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
