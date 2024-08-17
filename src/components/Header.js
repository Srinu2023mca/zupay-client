import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex flex-row justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">My Blog</Link>
                <Link className="btn btn-primary" to="/create">Create Blog</Link>
            </div>
        </nav>
    );
};

export default Header;
