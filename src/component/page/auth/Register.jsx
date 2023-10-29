import React, { useState } from "react";
import './autho.css'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    // const [isPhoneRegistration, setIsPhoneRegistration] = useState(false);
    const navigate = useNavigate();

    // const toggleRegistrationMethod = () => {
    //     setIsPhoneRegistration(!isPhoneRegistration);
    // };

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8800/users/register', values )
        .then(res => {
            if(res.data.Status === 'Success') {
                navigate('/verify')
            }else {
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Full Name" 
                onChange={e => setValues({...values, name: e.target.value})}
                />
                {/* <b className="registerChange" onClick={toggleRegistrationMethod}>
                    {isPhoneRegistration
                        ? "Register with Email"
                        : "Register with Phone Number"}
                </b> */}
                <Link className="registerChange" to="/phonenumber">Register with Phone Number</Link>
                <input required type="email" placeholder="Email"
                onChange={e => setValues({...values, email: e.target.value})}
                />
                <input required type="password" placeholder="Password"
                onChange={e => setValues({...values, password: e.target.value})}
                />
                    <button>Register</button>
                {/* <p>error</p> */}
                <span>
                    Do you have an account?{" "}
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register;
