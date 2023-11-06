import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8800/home')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8800/project/' + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container-project">
            <h2>All Projects</h2>
            <Link to="/project/create" className="btn btn-warning">Add</Link>
            <table id="example" className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Member</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.project_id}</td>
                            <td>{user.project_name}</td>
                            <td>{user.description}</td>
                            <td>{user.member}</td>
                            <td>{user.status}</td>

                            <td>
                                <button onClick={() => handleDelete(user.project_id)} className="btn btn-danger">Delete</button>
                            </td>
                            <td>
                                <Link style={{ width: "150px" }} to={`/project/edit/${user.project_id}`} className="btn btn-primary">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectList;