import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProject() {
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [mem, setMem] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams()
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8800/update/' + id, { name, des, mem, status })
            .then(res => {
                console.log(res);

                navigate("/project");
            }).catch(err => {
                console.log(err);
                toast.error("Đã xảy ra lỗi khi thêm.");
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
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
                <button style={{ width: "150px", margin: "20px" }} type="submit" className="btn btn-success mt-3">
                    Update
                </button>
            </form>
        </div>
    )
}

export default EditProject;