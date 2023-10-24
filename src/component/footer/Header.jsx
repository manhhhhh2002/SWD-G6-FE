import React from "react";
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="container-header">
                <div className="logo">
                    <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-fpt-inkythuatso-1-01-01-14-33-35.jpg" alt="fpt" />
                </div>

                <div className="links">
                    <Link className="link" to="/register">Register</Link>
                    <Link className="link" to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header