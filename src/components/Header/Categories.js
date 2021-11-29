import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Categories = (props) => {
  const { categories } = props;
  const links = categories.map((item) => (
    <Link to={`/category/${item}`}>{item.toUpperCase()}</Link>
  ));

  return <Container>{links}</Container>;
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

const Container = styled.div`
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
`;

export default Categories;
