import React, { PropTypes, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';

const SlidingMenu = (props) => {
  const [animation, setAnimation] = useState(true);
  const { categories } = props;

  const menuItems = categories.map((item) => (
    <Link className={'menuLink'} to={`/category/${item}`} key={uuid.v4()}>
      {item.toUpperCase()}
    </Link>
  ));

  useEffect(() => {
    setTimeout(() => {
      setAnimation((prevState) => !prevState);
    }, 1);
  }, []);

  return (
    <Container style={animation ? { width: 0 } : { width: '100%' }}>
      {menuItems}
    </Container>
  );
};

SlidingMenu.propTypes = {};

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
`;

const Container = styled.nav`
  position: absolute;
  top: 110px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  width: 0;
  border-top: 1px solid rgba(163, 163, 163);
`;

export default SlidingMenu;
