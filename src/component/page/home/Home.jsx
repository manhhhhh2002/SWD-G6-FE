import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import Swal from 'sweetalert2';

const Home = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    axios.defaults.withCredentials = true;

    useEffect(() => {
        // Kiểm tra xem token đã được lưu trong cookies hay chưa
        const token = Cookies.get('token');
        if (token) {
            // Nếu token tồn tại, thì hiển thị thông tin đã đăng nhập
            setAuth(true);
            setName(Cookies.get('name'));
        } else {
            // Nếu không có token, hiển thị thông báo đăng nhập
            setAuth(false);
            setMessage("You are not logged in.");
        }
    }, []);


    const handleLogout = () => {
        // Xóa token và tên người dùng khỏi cookies khi đăng xuất
        Cookies.remove('token');
        Cookies.remove('name');
        window.location.reload(true);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logout successfully!!',
            showConfirmButton: false,
            width: 500,
            heightAuto: 100,
            timer: 1500
        })
        setAuth(false);
    }

    return (
        <div className="header">
            {auth ? (
                <div>
                    <h3>You are authorized {name}</h3>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h3>{message}</h3>
                    <h3>Login now</h3>
                    <Link to={'/login'} className="btn btn-primary">Login</Link>
                </div>
            )}
        </div>
    )
}

export default Home;
