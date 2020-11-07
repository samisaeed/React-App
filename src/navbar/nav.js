import React from 'react';
import '../app.css';
import './nav.css';


const NavComponent = () => {
        return (

            <nav className="navbar  bg-primary">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link item" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link item" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link item" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </nav>

        )
};

    export default NavComponent;
