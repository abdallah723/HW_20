import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import'../App.css';

function Navbar() {

    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/" className ="navbar-brand">About Me</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Projects" className ="navbar-brand">Projects</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Contact" className ="navbar-brand">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;