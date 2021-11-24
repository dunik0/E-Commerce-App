import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from '../../assets/user-icon.png';
import basketIcon from '../../assets/shopping-basket-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import LinkIcon from './LinkIcon';

const NavIcons = (props) => {
  const linkIcons = [
    { icon: heartIcon, link: '/liked' },
    { icon: userIcon, link: '/account' },
    { icon: basketIcon, link: '/cart' },
  ];

  const links = linkIcons.map((item) => (
    <LinkIcon destination={item.link} image={item.icon} key={item.link} />
  ));
  return <NavContainer>{links}</NavContainer>;
};

NavIcons.propTypes = {};

const NavContainer = styled.nav`
  display: flex;
  width: 200px;
  justify-content: flex-end;
  padding-right: 10px;
`;

export default NavIcons;
