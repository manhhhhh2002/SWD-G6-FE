import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/authContext.js";
import { useNavigate} from 'react-router-dom'


const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [otp, setOtp] = useState("");
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined) {
      setError("Please enter a valid phone number!");
      return;
    }
    try {
      const verifier = await setUpRecaptha(number);
      setRecaptchaVerifier(verifier);
      setIsVerifyingOTP(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await recaptchaVerifier.confirm(otp);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={isVerifyingOTP ? verifyOtp : getOtp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="VN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Button variant="secondary" onClick={() => setIsVerifyingOTP(false)}>
              Cancel
            </Button>
            &nbsp;
            <Button type="submit" variant="primary">
              {isVerifyingOTP ? "Verify" : "Send OTP"}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;

