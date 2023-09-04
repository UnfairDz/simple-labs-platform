import React from 'react'

import './loadingCards.css'

export default function Loading() {
    const numberOfTimesToRepeat = 3;

    const repeatedComponents = Array.from({ length: numberOfTimesToRepeat }, (_, index) => (
        <div key={index} className='lab-card-loading'>
            <div className='lab-card-column-loading'>
                <div className='lab-name-loading'>{/*props.lab.name*/}</div>
                <div className='lab-tech-loading'>{/*props.lab.technology*/}</div>
            </div>
            <div className='lab-card-column-loading second-column-loading'>
                <div className='lab-card-date-loading'>
                    <div className='lab-card-date-day-loading'>{/*new Date(props.lab.startDate).getDate()*/}</div>
                    <div className='lab-card-date-month-loading'>{/*new Date(props.lab.startDate).toLocaleString('en-US', { month: 'long' })*/}</div>
                </div>
                <div className='lab-card-enroll-loading'>
                    <div></div>
                </div>
            </div>
        </div>
    ));

  return (
    <>
        {repeatedComponents}
    </>
  )
}
