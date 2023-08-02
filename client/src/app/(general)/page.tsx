"use client";

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import {
  setLabs,
  selectLabs,
} from '../../redux/features/labSlice';
import axios from 'axios';
import LabCard from '../components/LabCard'
import { BiPlus } from 'react-icons/bi';

import './home.css'

import { judson, jomhuria } from '../fonts'

function Home() {
  const labs = useSelector(selectLabs);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchLabs() {
      const response = await axios.get('http://localhost:5000/api/v1/labs');
      dispatch(setLabs(response.data.data.data));
    }
    fetchLabs();
  }, [dispatch]);

  return (
    <div className='content-container'>
        <Image className='hero-image' src="/images/hero image.png" alt="Hero image" width="1920" height="702" />
        
        <div className='section-title'>
          <h1 className={jomhuria.className + ' labs-section-title'}>Available Labs</h1>
          <Link href='/labs/new' className='section-title-plus-icon-container'><BiPlus className='section-title-plus-icon' /></Link>
        </div>
        <div className='labs-section'>
          {labs.length>0 ? labs.map((lab:any, index:any) =>  { 
            return <LabCard key={lab._id} lab={lab} />}) : <h1 className={judson.className + ' no-lab-find-text'} >No Lab Available come back later</h1>
          }
        </div>
    </div>
  )
}

export default Home