import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BiPlus } from 'react-icons/bi';

import './home.css'

import { jomhuria } from '../fonts'

import LabList from './LabList';

function Home({ user }: any) {
  console.log(user);
  return (
    <div className='content-container'>
        <Image className='hero-image' src="/images/hero image.png" alt="Hero image" width="1920" height="702" />
        
        <div className='section-title'>
          <h1 className={jomhuria.className + ' labs-section-title'}>Available Labs</h1>
          {/*(user.role === 'admin') 
          ?*/
          <Link href='/labs/new' className='section-title-plus-icon-container'><BiPlus className='section-title-plus-icon' /></Link>
          /*:
          <></>*/}
        </div>
        <div className='labs-section'>
          <LabList />
        </div>
    </div>
  )
}

export default Home