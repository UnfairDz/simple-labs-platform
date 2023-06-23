import React from 'react'

import Link from 'next/link'

import { BsArrowRight } from 'react-icons/Bs';
import { jua, judson } from '../fonts'

import './lab-card.css'

function LabCard(props:any) {
  return (
    <Link key={props.lab._id} href={`/labs/${props.lab._id}`} className='lab-card'>
        <div className='lab-card-column'>
            <div id='jua-font' className={jua.className + ' lab-name'}>{props.lab.name}</div>
            <div className={judson.className + ' lab-tech'}>{props.lab.technology}</div>
        </div>
        <div className='lab-card-column second-column'>
            <div className='lab-card-date'>
                <div id='jua-font' className={jua.className+' lab-card-date-day'}>{new Date(props.lab.startDate).getDate()}</div>
                <div id='jua-font-size' className={jua.className + ' lab-card-date-month'}>{new Date(props.lab.startDate).toLocaleString('en-US', { month: 'long' })}</div>
            </div>
            <div className='lab-card-enroll'>
                <div id='jua-font-size' className={jua.className + ' enroll-text'}>Enroll</div>
                <BsArrowRight className='right-arrow-icon'></BsArrowRight>
            </div>
        </div>
    </Link>
  )
}

export default LabCard