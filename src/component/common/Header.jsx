import React from "react";
import './style.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

const Header = () => {
    const token = Cookies.get('token');
    const name = Cookies.get('name');
    const isLoggedIn = !!token; 

    return (
        <div className="header">
            <div className="container-header">
                <div className="logo">
                    <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-fpt-inkythuatso-1-01-01-14-33-35.jpg" alt="fpt" />
                </div>

                <div className="links">
                    {isLoggedIn ? (
                        <span>Xin chào {name}</span>
                    ) : (
                        <>
                            <Link className="link" to="/register">Register</Link>
                            <Link className="link" to="/login">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
