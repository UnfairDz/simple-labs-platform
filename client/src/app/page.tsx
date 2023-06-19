import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/Bs';

import './home.css'

import { jua, judson, jomhuria } from './fonts'

function Home() {
  return (
    <div className='content-container'>
        <Image className='hero-image' src="/images/hero image.png" alt="Hero image" width="1920" height="702" />
        
        <h1 className={jomhuria.className + ' labs-section-title'}>Available Labs</h1>
        <div className='labs-section'>
          <Link href='/labs/id'className='lab-card'>
            <div className='lab-card-column'>
              <div id='jua-font' className={jua.className + ' lab-name'}>Frontend dev Lab</div>
              <div className={judson.className + ' lab-tech'}>NextJS ReactJS Redux</div>
            </div>
            <div className='lab-card-column second-column'>
              <div className='lab-card-date'>
                <div id='jua-font' className={jua.className+' lab-card-date-day'}>12</div>
                <div id='jua-font-size' className={jua.className + ' lab-card-date-month'}>April</div>
              </div>
              <div className='lab-card-enroll'>
                <div id='jua-font-size' className={jua.className + ' enroll-text'}>Enroll</div>
                <BsArrowRight className='right-arrow-icon'></BsArrowRight>
              </div>
            </div>
          </Link>
          <Link href='/labs/id'className='lab-card'>
            <div className='lab-card-column'>
              <div id='jua-font' className={jua.className + ' lab-name'}>Backend dev Lab</div>
              <div className={judson.className + ' lab-tech'}>NodeJS Express Mongodb</div>
            </div>
            <div className='lab-card-column second-column'>
              <div className='lab-card-date'>
                <div id='jua-font' className={jua.className+' lab-card-date-day'}>02</div>
                <div id='jua-font-size' className={jua.className + ' lab-card-date-month'}>July</div>
              </div>
              <div className='lab-card-enroll'>
                <div id='jua-font-size' className={jua.className + ' enroll-text'}>Enroll</div>
                <BsArrowRight className='right-arrow-icon'></BsArrowRight>
              </div>
            </div>
          </Link>
          <Link href='/labs/id'className='lab-card'>
            <div className='lab-card-column'>
              <div id='jua-font' className={jua.className + ' lab-name'}>UI/UX Lab</div>
              <div className={judson.className + ' lab-tech'}>Photoshop</div>
            </div>
            <div className='lab-card-column second-column'>
              <div className='lab-card-date'>
                <div id='jua-font' className={jua.className+' lab-card-date-day'}>24</div>
                <div id='jua-font-size' className={jua.className + ' lab-card-date-month'}>September</div>
              </div>
              <div className='lab-card-enroll'>
                <div id='jua-font-size' className={jua.className + ' enroll-text'}>Enroll</div>
                <BsArrowRight className='right-arrow-icon'></BsArrowRight>
              </div>
            </div>
          </Link>
          <Link href='/labs/id'className='lab-card'>
            <div className='lab-card-column'>
              <div id='jua-font' className={jua.className + ' lab-name'}>Devops Lab</div>
              <div className={judson.className + ' lab-tech'}>Kubernetes docker</div>
            </div>
            <div className='lab-card-column second-column'>
              <div className='lab-card-date'>
                <div id='jua-font' className={jua.className+' lab-card-date-day'}>12</div>
                <div id='jua-font-size' className={jua.className + ' lab-card-date-month'}>April</div>
              </div>
              <div className='lab-card-enroll'>
                <div id='jua-font-size' className={jua.className + ' enroll-text'}>Enroll</div>
                <BsArrowRight className='right-arrow-icon'></BsArrowRight>
              </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Home