"use client";

import React, { useState } from 'react'
import './edit-lab.css'

import { judson, jua } from '../../../fonts'


function LabEdit() {
  const [lab, setLab] = useState({})

  const handleChange = (e: any): void => {
    setLab({...lab, [e.target.name]: e.target.value});
    console.log(lab);
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  return (
    <div className='content-container'>
      <form className='add-lab-form'>
          <label id='jua-font' className={jua.className + ' form-label'}>Name</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="name" onChange={handleChange} />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Technologies</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="text" name="technology" onChange={handleChange} />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Description</label>
          <br/>
          <textarea id='jua-font' className={jua.className + ' form-input text-area'} name="description" onChange={handleChange} />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Capacity</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="number" name="capacity" onChange={handleChange} />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>Start date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="startDate" onChange={handleChange} />
          <br/>
          <label id='jua-font' className={jua.className + ' form-label'}>End date</label>
          <br/>
          <input id='jua-font' className={jua.className + ' form-input'} type="date" name="endDate" onChange={handleChange} />
          <br/>
          <button id='jua-font' className='submit-btn' onClick={handleSubmit}>Update</button>
      </form>
    </div>
  )
}

export default LabEdit