import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-small.png';

const Logo = (props) => {
  const { type = 'default' } = props;
  return (
    <NavLink to={'/'}>
      <Image src={type === 'default' ? logo : logoSmall} alt="Front Page" />
    </NavLink>
  );
};

Logo.propTypes = {};

const Image = styled.img`
  width: 150px;
`;

export default Logo;
