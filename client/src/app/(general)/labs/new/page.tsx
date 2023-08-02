"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import './add-lab.css'

import { jua } from '../../../fonts'

import { useDispatch } from 'react-redux';
import {
  createLab,
} from '../../../../redux/features/labSlice';
import axios from 'axios';


function AddLabForm() {
  const [lab, setLab] = useState({})

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleChange = (e: any) => {
    setLab({...lab, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Make POST request to server with task data
    await axios.post('http://localhost:5000/api/v1/labs', lab, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(`Lab created successfully`);
      push('/');
    })
    .catch(error => {
      console.error(`Failed to create lab: ${error.message}`);
      // Handle the error, such as displaying an error message
    })

    dispatch(createLab(lab));
  };

  return (
    <div className='content-container'>
      <form onSubmit={handleSubmit} className='add-lab-form'>
          <label id='jua-font' className={jua.className + ' form-label'}>Name</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="name" onChange={handleChange} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Technologies</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="technology" onChange={handleChange} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Description</label>
          <br/>
          <textarea id='jua-font' className={jua.className + ' form-input text-area'} name="description" onChange={handleChange} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Capacity</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="number" name="capacity" onChange={handleChange} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Start date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="startDate" onChange={handleChange} required />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>End date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="endDate" onChange={handleChange} required />
          <br/>
          <button id='jua-font' className='submit-btn'>Create</button>
      </form>
    </div>
  )
}

export default AddLabForm