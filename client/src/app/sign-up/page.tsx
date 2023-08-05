"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jua, jomhuria } from '../fonts';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {IoMdArrowBack} from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/features/userSlice';

import './sign-up.css';

function SignUp() {
    const dispatch = useDispatch();
    const router = useRouter()

    const [user, setUser] = useState(
        { 
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: ""
        }
      )

    const handleChange = (e: any) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSignup = async (e:any) => {
        e.preventDefault();

        try {
            const {firstName, lastName, email, password, passwordConfirm} = user;

            const res = await axios({
              withCredentials: true,
              method: "POST",
              url: "http://localhost:5000/api/v1/users/signup",
              data: {
                firstName,
                lastName,
                email,
                password,
                passwordConfirm,
              },
            });
        
            if (res.data.status === "success") {
              alert("Signup successfull!");
              const user = res.data.data.user;
              dispatch(loginSuccess({...user}));
              window.setTimeout(() => {
                router.push('/');
              }, 1500);
            }
          } catch (err:any) {
            alert("Errror: "+err.response.data.message);
          }
    };


  return (
    <div className='content-container'>
        <div className='sign-up-page'>
            <div className='sign-up-first-column'>
                <div className={jomhuria.className + ' logo-with-container'}>HighLabs</div>
                <Link href='/' className='icon-back-container'><IoMdArrowBack className='icon-back' /></Link>
                <form onSubmit={handleSignup} className='add-user-form'>
                    <label id='jua-font' className={jua.className + ' form-label'}>First name</label>
                    <br/>
                    <input id='jua-font' className={jua.className + ' form-input'} type="text" name="firstName" onChange={handleChange} required />
                    <br/>
                    <label id='jua-font' className={jua.className + ' form-label'}>Last name</label>
                    <br/>
                    <input id='jua-font' className={jua.className + ' form-input'} type="text" name="lastName" onChange={handleChange} required />
                    <br/>
                    <label id='jua-font' className={jua.className + ' form-label'}>Email</label>
                    <br/>
                    <input type='email' id='jua-font' className={jua.className + ' form-input'} name="email" onChange={handleChange} required />
                    <br/>
                    <label id='jua-font' className={jua.className + ' form-label'}>Password</label>
                    <br/>
                    <input type='password' id='jua-font' className={jua.className + ' form-input'} name="password" onChange={handleChange} required />
                    <br/>
                    <label id='jua-font' className={jua.className + ' form-label'}>Password confirm</label>
                    <br/>
                    <input type='password' id='jua-font' className={jua.className + ' form-input'} name="passwordConfirm" onChange={handleChange} required />
                    <br/>
                    <div id='jua-font' className={jua.className + ' terms-container'}>
                        <input type="checkbox" name="terms" className='terms-checkbox' required />
                        <p>I have read and agree to the <Link href='terms-of-service' className='terms-text'>Terms of Service</Link></p>
                    </div>
                    <br/>
                    <button id='jua-font' className='submit-btn'>Sign up</button>
                </form>
            </div>
            <Image className='sign-up-image' src="/images/11.jpg" alt="sign-up-image" width="1152" height="1566" />
        </div>
    </div>
  )
}

export default SignUp