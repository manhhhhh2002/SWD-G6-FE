import React, { useState } from "react";
import './autho.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../service/AuthService.js'; // Import the service

import Swal from 'sweetalert2';

const RegisterView = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        registerUser(values)
            .then(data => {
                if (data.Status === 'Success') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'Please verify!!',
                        showConfirmButton: false,
                        width: 500,
                        heightAuto: 100,
                        timer: 1500
                    });
                    navigate('/verify');
                } else {
                    alert(data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Full Name"
                    onChange={e => setValues({ ...values, name: e.target.value })}
                />
                <Link className="registerChange" to="/phonenumber">Register with Phone Number</Link>
                <input required type="email" placeholder="Email"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                />
                <input required type="password" placeholder="Password"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                />
                <button>Register</button>
                <span>
                    Do you have an account?{" "}
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    )
}

export default RegisterView;
