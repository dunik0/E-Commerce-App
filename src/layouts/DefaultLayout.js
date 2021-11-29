import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {};

const Main = styled.main`
  margin-top: 120px;
  width: min(980px, 100%);
`;

export default DefaultLayout;
