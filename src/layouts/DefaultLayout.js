import React, { PropTypes } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
