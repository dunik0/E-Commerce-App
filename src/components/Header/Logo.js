import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-small.png';
import { useMediaQuery } from 'react-responsive';

const Logo = ({ type = 'default' }) => {
  const isSmallMobile = useMediaQuery({ maxWidth: 300 });

  return (
    <NavLink to={'/'}>
      <Image
        src={type === 'default' ? logo : logoSmall}
        alt="Front Page"
        isMobile={isSmallMobile}
      />
    </NavLink>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
  isMobile: PropTypes.bool,
};

const Image = styled.img`
  ${({ isMobile }) => (isMobile ? `width: 120px;` : `width: 150px;`)}
`;

export default Logo;
