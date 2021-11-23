import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom'

const NavIcons = props => {
    return (
        <nav>
            <NavLink to="/liked">

                <svg class="icon-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.57 14.24" aria-hidden="true" focusable="false" fill="currentColor"><g fill="none" stroke="#000"><g data-name="Ellipse 5" transform="translate(1.78)"><circle cx="4" cy="4" r="4" stroke="none"></circle><circle cx="4" cy="4" r="3.5"></circle></g><path data-name="Path 43" d="M.5 13.73s.08-5.91 5.26-5.91 5.3 5.9 5.3 5.9" stroke-linecap="round"></path></g></svg>

            </NavLink>
            <NavLink to="/account">About</NavLink>
            <NavLink to="/cart">About</NavLink>
        </nav>
    );
};

NavIcons.propTypes = {

};

export default NavIcons;