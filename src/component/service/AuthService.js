import axios from 'axios';

const registerUser = async (values) => {
    try {
        const res = await axios.post('http://localhost:8800/users/register', values);
        return res.data;
    } catch (err) {
        throw err;
    }
};

const loginUser = async (values) => {
    try {
        const res = await axios.post('http://localhost:8800/users/login', values);
        return res.data;
    } catch (err) {
        throw err;
    }
};

const verifyCode = async (code) => {
    try {
        const res = await axios.post("http://localhost:8800/users/verify", { code });
        return res.status;
    } catch (err) {
        throw err;
    }
};

export { registerUser, loginUser , verifyCode};
