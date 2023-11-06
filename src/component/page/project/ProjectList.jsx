import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProjectList.css'; // Import your custom CSS file

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8800/home')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/project/${id}`);
            setProjects(projects.filter(project => project.project_id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h2 className="my-4">All Projects</h2>
            <Link to="/project/create" className="btn add-button">Add Project</Link>
            <table className="custom-table">
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
                    {projects.map((project) => (
                        <tr key={project.project_id}>
                            <td>{project.project_id}</td>
                            <td>{project.project_name}</td>
                            <td>{project.description}</td>
                            <td>{project.member}</td>
                            <td>{project.status}</td>
                            <td>
                                <button onClick={() => handleDelete(project.project_id)} className="delete-button">Delete</button>
                                <Link to={`/project/edit/${project.project_id}`} className="edit-button">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectList;
