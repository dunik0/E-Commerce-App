import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const SlidingMenu = ({ categories }) => {
  const [animation, setAnimation] = useState(true);

  const menuItems = categories.map((item) => (
    <Link
      className={'menuLink'}
      to={`/category/${item.toLowerCase()}`}
      key={uuid.v4()}
    >
      {item.toUpperCase()}
    </Link>
  ));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation((prevState) => !prevState);
    }, 1);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <Container animation={animation}>{menuItems}</Container>;
};

SlidingMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgba(163, 163, 163);
  font-family: Montserrat;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  &:hover {
    background-color: #998b8b;
  }
`;

const Container = styled.nav`
  position: absolute;
  top: 110px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  border-top: 1px solid rgba(163, 163, 163);
  ${({ animation }) => (animation ? `width: 0;` : `width: 100%;`)}
`;

export default SlidingMenu;
