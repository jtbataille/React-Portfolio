import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './style.css';

function NavBar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">j t b</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={location.pathname === "/viewCV" ? "nav-link active" : "nav-link"} to="https://drive.google.com/file/d/1JYsNFGGtNC_NqGv24FG_Y1mJtWWlFAj_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;