import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Categories = ({ categories }) => {
  const links = categories.map((item) => (
    <Link to={item === 'all' ? '/' : `/category/${item}`} key={item}>
      {item.toUpperCase()}
    </Link>
  ));

  return <Container>{links}</Container>;
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 2px;
  font-size: 0.9rem;
  font-family: Poppins;
  font-weight: 1000;
  &:hover {
    text-decoration: underline;
  }
`;

export default Categories;
