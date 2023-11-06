import React, { useState } from 'react';
import './classList.css';

export default function ClassList() {
  const initialClassData = [
    {
      className: 'Class 1',
      codeclass: 'C1',
      date: '2023-10-30',
      member: 25,
      status: 'Active',
    },
    {
      className: 'Class 2',
      codeclass: 'C2',
      date: '2023-11-05',
      member: 20,
      status: 'Inactive',
    },
    // Thêm dữ liệu cho các lớp học khác tại đây
  ];

  const [classData, setClassData] = useState(initialClassData);
  const [sortOption, setSortOption] = useState('name');

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
              <th>Date</th>
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
                <td>{classInfo.date}</td>
                <td>{classInfo.member}</td>
                <td>{classInfo.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
