import React from 'react';
import { Link } from 'react-router-dom';
import'../App.css';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">About Me <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active" href="#"> Projects <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active" href="#"> Contact Me <span className="sr-only"></span></a>
                </div>
            </div>
        </nav>


        // < div>
        // <nav classname="navbar">
        //     <Link to={'/'} class="Link"><p className= "nav-link pt-0 pb-0 active">Home</p> </Link>

        //     <Link to={'/about'} class="Link"><p className= "nav-link pt-0 pb-0 active">About</p> </Link>

        //     <Link to={'/portfolio'} class="Link"><p className= "nav-link pt-0 pb-0 active">Portfolio</p> </Link>

        //     <Link to={'/contact'} class="Link"><p className= "nav-link pt-0 pb-0 active">Contact</p> </Link>
        // </nav>
        // </div>
    )
}

export default Navbar;