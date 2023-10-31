import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateHome2() {
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
                    navigate("/");
                }
            }).catch(err => {
                console.log(err);
                toast.error("Đã xảy ra lỗi khi thêm.");
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" name="id" onChange={e => setID(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Des:
                    <input type="text" name="des" onChange={e => setDes(e.target.value)} />
                </label>
                <label>
                    Member:
                    <input type="text" name="mem" onChange={e => setMem(e.target.value)} />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" onChange={e => setStatus(e.target.value)} />
                </label>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateHome2;
