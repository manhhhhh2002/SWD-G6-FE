import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' for navigation
import './classList.css';

export default function ClassList() {
  const [classData, setClassData] = useState([]);
  const [sortOption, setSortOption] = useState('name');

  const fetchClassData = async () => {
    try {
      const response = await fetch('http://localhost:8888/class');
      if (response.ok) {
        const data = await response.json();
        setClassData(data);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  const handleDeleteClass = async (classId) => {
    try {
      const response = await fetch(`http://localhost:8888/class/${classId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchClassData();
      } else {
        console.error('Lỗi khi xóa lớp học');
      }
    } catch (error) {
      console.error('Lỗi khi xóa lớp học:', error);
    }
  };

  const handleSort = (option) => {
    if (option === 'name') {
      const sortedData = [...classData].sort((a, b) =>
        a.className.localeCompare(b.className)
      );
      setClassData(sortedData);
    } else if (option === 'member') {
      const sortedData = [...classData].sort((a, b) => a.member - b.member);
      setClassData(sortedData);
    }
    setSortOption(option);
  };

  useEffect(() => {
    fetchClassData();
  }, []);

  return (
    <div>
      <div className="container-class">
        <h2>Quản Lý Lớp Học</h2>
        <div className="sort-options">
          <span>Sắp xếp theo: </span>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="name">Tên lớp</option>
            <option value="member">Số lượng lớp học</option>
          </select>
        </div>
        <table className="tbClassList">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Codeclass</th>
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
                <td>{classInfo.className}</td>
                <td>{classInfo.codeclass}</td>
                <td>{classInfo.startDate}</td>
                <td>{classInfo.endDate}</td> 
                <td>{classInfo.member}</td>
                <td>{classInfo.status}</td>
                <td>
                  <Link to={`/updateclass/${classInfo.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDeleteClass(classInfo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
