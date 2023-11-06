import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UpdateClass.css';


export default function UpdateClass() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nameclass: "",
    codeclass: "",
    description: "",
    StartDate: "",
    EndDate: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdateClass = async (e) => {
    e.preventDefault();

    const requestData = {
      nameclass: formData.nameclass,
      codeclass: formData.codeclass,
      description: formData.description,
      StartDate: formData.StartDate,
      EndDate: formData.EndDate,
    };

    try {
      const response = await fetch(`/api/class/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
    
        setIsUpdated(true);
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật lớp học:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/class/${id}`);
        if (response.ok) {
          const classData = await response.json();
          setFormData(classData);
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin lớp học:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="container">
        <h2>Edit Class</h2>
        {isUpdated ? (
          <div>
            <p>Class updated successfully!</p>
            {/* You can add a button to redirect to another page here */}
          </div>
        ) : (
          <div className="form-input">
            <form>
              <div className="form-group">
                <label htmlFor="nameclass">Class Name:</label>
                <input
                  type="text"
                  id="nameclass"
                  name="nameclass"
                  value={formData.nameclass}
                  onChange={handleInputChange}
                />
              </div>
              {/* Rest of your form fields */}
              <button type="submit" onClick={handleUpdateClass}>
                Update class
              </button>
            </form>
          </div>
        )}
      </div>
      <Link to="/classList">Go to Class List</Link>
    </div>
  );
}
