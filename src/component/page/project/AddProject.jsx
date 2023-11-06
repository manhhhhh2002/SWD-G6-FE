import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProject() {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [mem, setMem] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8800/create', { id, name, des, mem, status })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    toast.success("Thêm thành công");
                    navigate("/project");
                }
            }).catch(err => {
                console.log(err);
                toast.error("Đã xảy ra lỗi khi thêm.");
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        className="form-control"
                        onChange={(e) => setID(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="des">Des:</label>
                    <input
                        type="text"
                        name="des"
                        id="des"
                        className="form-control"
                        onChange={(e) => setDes(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mem">Member:</label>
                    <input
                        type="text"
                        name="mem"
                        id="mem"
                        className="form-control"
                        onChange={(e) => setMem(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        className="form-control"
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </div>
                <button style={{ width: "150px", margin: "20px" }} type="submit" className="btn btn-success">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddProject;