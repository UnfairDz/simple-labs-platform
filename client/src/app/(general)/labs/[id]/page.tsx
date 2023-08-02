"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import './lab-details.css'

import { useDispatch } from 'react-redux';
import { deleteLab } from '../../../../redux/features/labSlice';
import axios from 'axios';

import { judson, jua } from '../../../fonts'

function LabDetails() {
    const [loading, setLoading] = useState(true);
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
    const { push } = useRouter();

    useEffect(() => {
        const url = window.location.href;
        const id = url.split('/').pop();
        async function fetchLab() {
          const response = await axios.get(`http://localhost:5000/api/v1/labs/${id}`);
          setLab(response.data.data.data);
        }
        setLoading(false);
        fetchLab();
      }, []);

      const handleDeleteLab = async (id:String) => {
        if (confirm('Are you sure you want to delete this lab?')) {
            dispatch(deleteLab(id));
            await axios.delete(`http://localhost:5000/api/v1/labs/${id}`)
            .then(response => {
            console.log(`Lab with ID ${id} deleted successfully`);
            // Do something with the response, such as updating the state
            push('/');
            })
            .catch(error => {
            console.error(`Failed to delete lab with ID ${id}: ${error.message}`);
            // Handle the error, such as displaying an error message
            })
          } else {
            // Do nothing!
          }   
      }



  return (
    <div className='content-container'>
        {lab.name==='' ? 
        <h1 className={judson.className + ' no-lab-find-text'} >There is no lab with this id</h1> : 
        <div className='lab-details-page'>
            <div className='lab-details-page-first-section'>
                <h1 id='jua-font' className={jua.className + ' lab-details-page-name'}>{lab.name}</h1>
                <p className={judson.className + ' lab-details-page-tech'}>{lab.technology}</p>
                <p className={judson.className + ' lab-details-page-description'}>
                    {lab.description}
                </p>
                <div className={jua.className + ' button-desktop enroll-button-desktop'}>Enroll</div>
                <div className='admin-buttons-desktop'>
                    <Link href={`/labs/${lab._id}/edit`} className={jua.className + ' button-desktop update-button-desktop'}>Update</Link>
                    <div onClick={() => handleDeleteLab(lab._id)} className={jua.className + ' button-desktop delete-button-desktop'}>Delete</div>
                </div>
            </div>
            <div className='lab-details-page-second-section'>
                <div className='lab-details-page-from-to-dates'>
                    <div className='lab-details-page-from-date-text'>
                        <p id='jua-font' className={jua.className + ' lab-details-page-from-text'}>
                            From
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            {new Date(lab.startDate).getDate()} {new Date(lab.startDate).toLocaleString('en-US', { month: 'long' })}
                        </p>
                    </div>
                    <div>
                        <p id='jua-font' className={jua.className + ' lab-details-page-to-text'}>
                            To
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            {new Date(lab.endDate).getDate()} {new Date(lab.endDate).toLocaleString('en-US', { month: 'long' })}
                        </p>         
                    </div>
                </div>
                <p id='jua-font' className={jua.className + ' lab-details-page-capacity-text'}>Enrollment capacity</p>
                <p className={judson.className + ' lab-details-page-capacity'}>{lab.capacity}</p>
                <p id='jua-font' className={jua.className + ' lab-details-page-spots-text'}>Spots available</p>
                <p className={judson.className + ' lab-details-page-spots'}>{lab.capacity}</p>
            </div>
            <div className={jua.className + ' button enroll-button'}>Enroll</div>
            <div className='admin-buttons'>
                <Link href={`/labs/${lab._id}/edit`} className={jua.className + ' button update-button'}>Update</Link>
                <div onClick={() => handleDeleteLab(lab._id)} className={jua.className + ' button delete-button'}>Delete</div>
            </div>
        </div>
        }
        
    </div>
  )
}

export default LabDetails