import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './additionClass.css';

export default function AdditionClass() {
  const [formData, setFormData] = useState({
    nameclass: "",
    codeclass: "",
    description: "",
    StartDate: "",
    EndDate: "",
  });

  const handleCreateClass = async () => {
    try {
      const response = await fetch('/api/class', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Class created successfully, you can handle the success as needed (e.g., show a success message or redirect).
        console.log('Class created successfully');
      } else {
        console.error('Error creating class');
      }
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Add New Class</h2>
        <div className="form-input">
          <form>
            <div className="form-group">
              <label htmlFor="nameclass">Class Name:</label>
              <input
                type="text"
                id="nameclass"
                name="nameclass"
              />
            </div>
            <div className="form-group">
              <label htmlFor="codeclass">Class Code:</label>
              <input
                type="text"
                id="codeclass"
                name="codeclass"
               
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
               
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="StartDate">Start Date:</label>
              <input
                type="date"
                id="StartDate"
                name="StartDate"
             
              />
            </div>
            <div className="form-group">
              <label htmlFor="EndDate">End Date:</label>
              <input
                type="date"
                id="EndDate"
                name="EndDate"
               
              />
            </div>
            <button type="button" onClick={handleCreateClass}>
              Create Class
            </button>
            <Link to="/classList">Go to Class List</Link>
          </form>
        </div>
      </div>

    </div>
  );
}
