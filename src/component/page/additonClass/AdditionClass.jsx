import React from 'react'
import "./additionClass.css"
export default function AdditionClass() {
   

  return (
    <div>
       <div className="container-class">
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
                    <button type="submit">Create Class</button>
                </form>
               </div>
            </div>
    </div>
  )
}
