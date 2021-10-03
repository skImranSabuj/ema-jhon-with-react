import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <NavLink to="/orders">Order Review</NavLink>
                {/* <a href="/orders">Order Review</a> */}
                {/* <a href="/inventory">Manage Inventory</a> */}
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;