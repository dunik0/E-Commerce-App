import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-small.png';

const Logo = ({ type = 'default' }) => {
  return (
    <NavLink to={'/'}>
      <Image src={type === 'default' ? logo : logoSmall} alt="Front Page" />
    </NavLink>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};

const Image = styled.img`
  width: 150px;
`;

export default Logo;
