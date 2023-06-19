import React from 'react'
import './lab-details.css'

import { judson, jua } from '../../fonts'

function LabDetails() {
  return (
    <div className='content-container'>
        <div className='lab-details-page'>
            <div className='lab-details-page-first-section'>
                <h1 id='jua-font' className={jua.className + ' lab-details-page-name'}>Frontend dev Lab</h1>
                <p className={judson.className + ' lab-details-page-tech'}>NextJS ReactJS Redux</p>
                <p className={judson.className + ' lab-details-page-description'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi 
                    repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto 
                    fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <div className={jua.className + ' button-desktop enroll-button-desktop'}>Enroll</div>
                <div className='admin-buttons-desktop'>
                    <div className={jua.className + ' button-desktop update-button-desktop'}>Update</div>
                    <div className={jua.className + ' button-desktop delete-button-desktop'}>Delete</div>
                </div>
            </div>
            <div className='lab-details-page-second-section'>
                <div className='lab-details-page-from-to-dates'>
                    <div>
                        <p id='jua-font' className={jua.className + ' lab-details-page-from-text'}>
                            From
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            12 April
                        </p>
                    </div>
                    <div>
                        <p id='jua-font' className={jua.className + ' lab-details-page-to-text'}>
                            To
                        </p>
                        <p className={judson.className + ' lab-details-page-date-text'}>
                            16 April
                        </p>         
                    </div>
                </div>
                <p id='jua-font' className={jua.className + ' lab-details-page-capacity-text'}>Enrollment capacity</p>
                <p className={judson.className + ' lab-details-page-capacity'}>10</p>
                <p id='jua-font' className={jua.className + ' lab-details-page-spots-text'}>Spots available</p>
                <p className={judson.className + ' lab-details-page-spots'}>6</p>
            </div>
            <div className={jua.className + ' button enroll-button'}>Enroll</div>
            <div className='admin-buttons'>
                <div className={jua.className + ' button update-button'}>Update</div>
                <div className={jua.className + ' button delete-button'}>Delete</div>
            </div>
        </div>
    </div>
  )
}

export default LabDetails