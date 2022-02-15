import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import optionsIcon from '../../assets/options-icon.png';

const Filters = ({ isMobile }) => {
  return (
    <Button isMobile={isMobile}>
      <FlexWrapper>
        <Image src={optionsIcon} />
        <Text>Filter Options</Text>
      </FlexWrapper>
    </Button>
  );
};

Filters.propTypes = {
  isMobile: PropTypes.bool,
};

const Button = styled.button`
  width: 100%;
  background-color: black;
  padding: 0.5rem;
  border: none;
  ${({ isMobile }) =>
    isMobile
      ? `
    width: 92%;
  `
      : `
    width: 100px;
  `}
`;

const Image = styled.img`
  width; 20px;
  height: 20px;
`;

const Text = styled.span`
  color: white;
  font-family: Montserrat;
  margin: 0 auto;
`;

const FlexWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export default Filters;
