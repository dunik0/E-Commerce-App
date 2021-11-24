import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkIcon = (props) => {
  const { image, destination } = props;
  return (
    <NavLink to={destination}>
      <Icon src={image} />
    </NavLink>
  );
};

LinkIcon.propTypes = {
  image: PropTypes.node.isRequired,
  destination: PropTypes.string.isRequired,
};

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default LinkIcon;
