import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' for navigation
import './classList.css';
import axios from "axios";

export default function ClassList() {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8800/class')
      .then(res => setClassData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/class/${id}`); // Use the correct port (8800) and variable (id)
      setClassData(classData.filter(classInfo => classInfo.id !== id)); // Filter based on 'id'
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="container-class">
        <h2>Quản Lý Lớp Học</h2>
        <div className="sort-options">
          <span>Sắp xếp theo: </span>
          <select>
            <option value="name">Tên lớp</option>
            <option value="member">Số lượng lớp học</option>
          </select>
        </div>
        <table className="tbClassList">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Codeclass</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Member</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classData.map((classInfo, index) => (
              <tr key={index}>
                <td>{classInfo.class_name}</td>
                <td>{classInfo.code_class}</td>
                <td>{classInfo.class_description}</td>
                <td>{classInfo.start_date}</td>
                <td>{classInfo.end_date}</td>
                <td>{classInfo.member}</td>
                <td>{classInfo.class_status}</td>
                <td>
                  <Link to={`/class/edit/${classInfo.class_id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(classInfo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
