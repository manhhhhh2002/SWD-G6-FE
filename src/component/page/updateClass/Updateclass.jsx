import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UpdateClass.css';


export default function UpdateClass() {
  const [classname, setClassName] = useState('');
  const [desClass, setDes] = useState('');
  const [mem, setMem] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { id } = useParams()
  const navigate = useNavigate();

  function handleSubmit(event) {
      event.preventDefault();
      axios.put('http://localhost:8800/class/' + id, { classname, desClass, mem, status,startDate,endDate })
          .then(res => {
              console.log(res);

              navigate("/class");
          }).catch(err => {
              console.log(err);
              toast.error("Đã xảy ra lỗi khi thêm.");
          });
  }

  return (
    <div>
      <div className="container">
        <h2>Edit Class</h2>
        {isUpdated ? (
          <div>
            <p>Class updated successfully!</p>
            
          </div>
        ) : (
          <div className="form-input">
            <form onsu>
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
              
              <button type="submit" onClick={handleUpdateClass}>
                Update class
              </button>
            </form>
          </div>
        )}
      </div>
      <Link to="/class"><button>Go to Class List</button></Link>
    </div>
  );
}
