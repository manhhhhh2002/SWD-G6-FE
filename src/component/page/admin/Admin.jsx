import React, { useState, useEffect } from 'react';
import { SettingList } from '../../service/SettingService';
import { Link } from 'react-router-dom';
import './Admin.css'

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await SettingList({});
        setData(result);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Setting List</h1>
      <Link to="/admin/create" >
        <button className='btnAdd'>Add New Setting</button></Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Setting</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.setting_id}>
              <td>{item.setting_id}</td>
              <td>{item.setting_name}</td>
              <td>{item.setting_type}</td>
              <td>{item.setting_active}</td>
              <td className="editbutton">
                <Link to={`/admin/edit/${item.setting_id}`}>
                  <button className="editsetting-button">Edit</button>
                </Link>

                <button className="deactivate-button">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
