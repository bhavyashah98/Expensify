import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;