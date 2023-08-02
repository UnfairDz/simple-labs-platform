"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jua, jomhuria } from '../fonts';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {IoMdArrowBack} from 'react-icons/io';

import './sign-in.css';

function SignIn() {
    const [user, setUser] = useState({})

    const { push } = useRouter();

    const handleChange = (e: any) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        // Make POST request to server with task data
        await axios.post('http://localhost:5000/api/v1/users', user, {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
        console.log(`User created successfully`);
        push('/');
        })
        .catch(error => {
        console.error(`Failed to create user: ${error.message}`);
        // Handle the error, such as displaying an error message
        })
    };


  return (
    <div className='content-container'>
        <div className='sign-up-page'>
            <div className='sign-up-first-column'>
                <div className={jomhuria.className + ' logo-with-container'}>HighLabs</div>
                <Link href='/' className='icon-back-container'><IoMdArrowBack className='icon-back' /></Link>
                <form onSubmit={handleSubmit} className='add-user-form'>
                    <label id='jua-font' className={jua.className + ' form-label'}>Email</label>
                    <br/>
                    <input type='email' id='jua-font' className={jua.className + ' form-input'} name="email" onChange={handleChange} required />
                    <br/>
                    <label id='jua-font' className={jua.className + ' form-label'}>Password</label>
                    <br/>
                    <input type='password' id='jua-font' className={jua.className + ' form-input'} name="password" onChange={handleChange} required />
                    <br/>
                    <button id='jua-font' className='submit-btn'>Sign in</button>
                </form>
            </div>
            <Image className='sign-up-image' src="/images/astronaut-playing-skate-space.avif" alt="sign-up-image" width="1152" height="1080" />
        </div>
    </div>
  )
}

export default SignIn