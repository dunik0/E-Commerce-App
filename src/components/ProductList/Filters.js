import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Filters = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <Button>Filters</Button>
    </Container>
  );
};

Filters.propTypes = {};

const Button = styled.button`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  ${({ isMobile }) =>
    isMobile
      ? `
    width: 90%;
  `
      : `
    width: 100px;
  `}
`;

export default Filters;
