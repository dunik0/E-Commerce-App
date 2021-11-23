import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from '../../assets/user-icon.png';
import basketIcon from '../../assets/shopping-basket-icon.png';
import heartIcon from '../../assets/heart-icon.png';

const NavIcons = (props) => {
  const linkIcons = [
    { icon: heartIcon, link: '/liked' },
    { icon: userIcon, link: '/account' },
    { icon: basketIcon, link: '/cart' },
  ];

  const links = linkIcons.map((item) => (
    <NavLink to={item.link}>
      <Icon src={item.icon} />
    </NavLink>
  ));
  return <NavContainer>{links}</NavContainer>;
};

NavIcons.propTypes = {};

const NavContainer = styled.nav`
  display: flex;
  width: 200px;
  justify-content: flex-end;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default NavIcons;
