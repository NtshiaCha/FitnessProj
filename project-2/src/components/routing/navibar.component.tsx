import React from 'react';
import { Link } from 'react-router-dom';

const NavibarComponent: React.FC = () => {

    return (
        <section id = "header-container">
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li> <Link to="/calendar">Calendar</Link></li>
                </ul>
            </nav>
        </section>
    
    )
}

export default NavibarComponent;