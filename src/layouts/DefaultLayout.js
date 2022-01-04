import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

const Main = styled.main`
  margin-top: 120px;
  width: 100%;
`;

export default DefaultLayout;
