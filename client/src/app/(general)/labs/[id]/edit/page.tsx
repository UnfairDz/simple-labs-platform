"use client";

import React, { useEffect, useState } from 'react'
import './edit-lab.css'

import { jua } from '../../../../fonts'

import { useDispatch } from 'react-redux';
import axios from 'axios';


function LabEdit() {
  const [lab, setLab] = useState({
      _id: '',
      name: '',
      description: '',
      technology: '',
      startDate: '',
      endDate: '',
      capacity: '',
  })
  const dispatch = useDispatch();

  useEffect(() => {
      const url = window.location.href;
      const id = url.split('/')[4];
      console.log(id);
      async function fetchLab() {
        const response = await axios.get(`http://localhost:5000/api/v1/labs/${id}`);
        setLab(response.data.data.data);
      }
      fetchLab();
    }, []);

  const handleChange = (e: any): void => {
    setLab({...lab, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e:any) => {
    e.preventDefault();

    const url = window.location.href;
    const id = url.split('/')[4];

    // Make PUT request to server
    await axios.put(`http://localhost:5000/api/v1/labs/${id}`, lab, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(`Lab updated successfully`);
      location.assign(`/labs/${id}`);
    })
    .catch(error => {
      console.error(`Failed to update lab: ${error.message}`);
      // Handle the error, such as displaying an error message
    })
  }

  return (
    <div className='content-container'>
      <form onSubmit={handleSubmit} className='add-lab-form'>
          <label id='jua-font' className={jua.className + ' form-label'}>Name</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="name" onChange={handleChange} value={lab.name} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Technologies</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="technology" onChange={handleChange} value={lab.technology} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Description</label>
          <br/>
          <textarea id='jua-font' className={jua.className + ' form-input text-area'} name="description" onChange={handleChange} value={lab.description} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Capacity</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="number" name="capacity" onChange={handleChange} value={lab.capacity} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Start date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="startDate" onChange={handleChange} value={lab.startDate.toString().slice(0, 10)} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>End date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="endDate" onChange={handleChange} value={lab.endDate.toString().slice(0, 10)} required />
          <br/>
          <button id='jua-font' className='submit-btn'>Update</button>
      </form>
    </div>
  )
}

export default LabEdit