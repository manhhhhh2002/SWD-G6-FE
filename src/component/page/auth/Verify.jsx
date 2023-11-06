import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { verifyCode } from '../../service/AuthService.js'; // Import the service

const Verify = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    verifyCode(code)
      .then((status) => {
        if (status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register successfully!!',
            showConfirmButton: false,
            width: 500,
            heightAuto: 100,
            timer: 1500
          })
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Verify</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter your verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>Verify</button>
      </form>
    </div>
  );
};

export default Verify;
