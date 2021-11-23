import React, { PropTypes } from 'react';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';

const Header = props => {
    return (
        <header>
            <div>

            </div>
            <SearchBar />
            <NavIcons />
        </header>
    );
};

Header.propTypes = {

};

export default Header;