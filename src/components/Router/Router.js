import React, { PropTypes } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from '../../pages/FrontPage';

const Router = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FrontPage />} />

            </Routes>
        </BrowserRouter>
    );
};

Router.propTypes = {

};

export default Router;