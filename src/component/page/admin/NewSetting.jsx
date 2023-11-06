import React, { useState } from 'react';
import { NewSetting } from '../../service/SettingService';
import { useNavigate } from 'react-router-dom'


const AddNewSetting = () => {
  const [newSettingData, setNewSettingData] = useState({
    setting_id: '',
    setting_name: '',
    setting_type: '',
  });
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await NewSetting(newSettingData); 
      console.log('New setting added successfully');
      navigate('/admin');

      setNewSettingData({
        setting_id: '',
        setting_name: '',
        setting_type: '',
      });
    } catch (error) {
      console.error('Error adding new setting:', error);
      alert(error);
    }
  };

  return (
    <div>
      <h1>New Setting</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="setting_id">Setting ID:</label>
          <input
            type="text"
            id="setting_id"
            name="setting_id"
            value={newSettingData.setting_id}
            onChange={(e) => setNewSettingData({ ...newSettingData, setting_id: e.target.value })}
            style={{width: '100%', marginRight: '30rem'}}
          />
        </div>
        <div>
          <label htmlFor="setting_name">Setting Name:</label>
          <input
            type="text"
            id="setting_name"
            name="setting_name"
            value={newSettingData.setting_name}
            onChange={(e) => setNewSettingData({ ...newSettingData, setting_name: e.target.value })}
            style={{width: '100%', marginRight: '30rem'}}
          />
        </div>
        <div>
          <label htmlFor="setting_type">Setting Type:</label>
          <input
            type="text"
            id="setting_type"
            name="setting_type"
            value={newSettingData.setting_type}
            onChange={(e) => setNewSettingData({ ...newSettingData, setting_type: e.target.value })}
            style={{width: '100%', marginRight: '30rem'}}
          />
        </div>
        <button type="submit" className='addnew'>Add</button>
      </form>
    </div>
  );
}

export default AddNewSetting;
