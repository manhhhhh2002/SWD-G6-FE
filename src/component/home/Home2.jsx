import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home2() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8800')
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
        <div>
            <Link to="/create" className="btn btn-success">Add</Link>
            <table id="example" class="table table-striped" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Des</th>
                        <th>Member</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.project_id}</td>
                            <td>{user.project_name}</td>
                            <td>{user.description}</td>
                            <td>{user.member}</td>
                            <td>{user.member}</td>
                            <td>
                                <Link to={`update/${user.project_id}`} className='btn btn-primary'>Edit</Link>

                                <button onClick={e => handleDelete(user.project_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Home2;
