import React from 'react'
import Link from 'next/link'

import { notFound } from "next/navigation"
import './lab-details.css'

import { judson, jua } from '../../../fonts'

import DeleteLab from './DeleteLab'
  
  async function getLab(id:any) {
    const res = await fetch(`http://localhost:5000/api/v1/labs/${id}`, {
      next: {
        revalidate: 0
      }
    })
  
    if (!res.ok) {
      notFound()
    }
  
    return res.json()
  }

async function LabDetails({ params }:any) {
    const lab = await getLab(params.id)

  return (
    <div className='content-container'>
        {lab.data.data.name==='' ? 
        <h1 className={judson.className + ' no-lab-find-text'} >There is no lab with this id</h1> : 
        <div className='lab-details-page'>
            <div className='lab-details-page-first-section'>
                <h1 id='jua-font' className={jua.className + ' lab-details-page-name'}>{lab.data.data.name}</h1>
                <p className={judson.className + ' lab-details-page-tech'}>{lab.data.data.technology}</p>
                <p className={judson.className + ' lab-details-page-description'}>
                    {lab.data.data.description}
                </p>
                <div className={jua.className + ' button-desktop enroll-button-desktop'}>Enroll</div>
                <div className='admin-buttons-desktop'>
                    <Link href={`/labs/${lab.data.data._id}/edit`} className={jua.className + ' button-desktop update-button-desktop'}>Update</Link>
                    <DeleteLab lab={lab.data.data} decoration=' button-desktop delete-button-desktop' />
                </div>
            </div>
            <div className='lab-details-page-second-section'>
                <div className='lab-details-page-from-to-dates'>
                    <div className='lab-details-page-from-date-text'>
                        <p id='jua-font' className={jua.className + ' lab-details-page-from-text'}>
                            From
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            {new Date(lab.data.data.startDate).getDate()} {new Date(lab.data.data.startDate).toLocaleString('en-US', { month: 'long' })}
                        </p>
                    </div>
                    <div>
                        <p id='jua-font' className={jua.className + ' lab-details-page-to-text'}>
                            To
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            {new Date(lab.data.data.endDate).getDate()} {new Date(lab.data.data.endDate).toLocaleString('en-US', { month: 'long' })}
                        </p>         
                    </div>
                </div>
                <p id='jua-font' className={jua.className + ' lab-details-page-capacity-text'}>Enrollment capacity</p>
                <p className={judson.className + ' lab-details-page-capacity'}>{lab.data.data.capacity}</p>
                <p id='jua-font' className={jua.className + ' lab-details-page-spots-text'}>Spots available</p>
                <p className={judson.className + ' lab-details-page-spots'}>{lab.data.data.capacity}</p>
            </div>
            <div className={jua.className + ' button enroll-button'}>Enroll</div>
            <div className='admin-buttons'>
                <Link href={`/labs/${lab.data.data._id}/edit`} className={jua.className + ' button update-button'}>Update</Link>
                <DeleteLab lab={lab.data.data} decoration=' button delete-button' />
            </div>
        </div>
        }
        
    </div>
  )
}

export default LabDetails