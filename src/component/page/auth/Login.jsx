import React, { useState } from "react";
import './autho.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "../../commonService/authContext";
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { loginUser } from '../../service/AuthService.js'; 

const Login = () => {
    const navigate = useNavigate();

    const { googleSignIn, facebookSignIn } = useUserAuth();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(values)
            .then(data => {
                if (data.Status === 'Success') {
                    console.log(data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login successfully!!',
                        showConfirmButton: false,
                        width: 500,
                        heightAuto: 100,
                        timer: 1500
                    });
                    navigate('/');
                } else {
                    alert(data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    const handleFacebookSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await facebookSignIn();
            const user = userCredential.user;
            Cookies.set('token', user.accessToken);
            Cookies.set('name', user.displayName);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully!!',
                showConfirmButton: false,
                width: 500,
                heightAuto: 100,
                timer: 1500
            })
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await googleSignIn();
            const user = userCredential.user;
            Cookies.set('token', user.accessToken);
            Cookies.set('name', user.displayName);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully!!',
                showConfirmButton: false,
                width: 500,
                heightAuto: 100,
                timer: 1500
            })
            navigate("/");

        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Email or Phone Number"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                />
                <input required type="password" placeholder="Password"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                />
                <button>Login</button>
                <Link to="/forgot">Forgot Password?</Link>
                {/* <p>erropr</p> */}
                <span>Don't you have an account? <Link to="/register">Register</Link>
                </span>

                <div className="form-links">
                    <Link to="/google" className="login-with-google-link" onClick={handleGoogleSignIn}>
                        Login with Google
                    </Link>
                    <Link
                        to="/facebook"
                        className="login-with-facebook-link"
                        onClick={handleFacebookSignIn}
                    >
                        Login with Facebook
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login