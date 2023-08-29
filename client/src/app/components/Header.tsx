"use client";

import React, { useState } from 'react'
import "./header.css";
import { RxHamburgerMenu } from 'react-icons/Rx';
import Link from 'next/link';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/features/userSlice';


import { jomhuria, jua } from '../fonts'

function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state:any) => state.user.user);;

    let [isOpen, setisOpen] = useState(false)

    function handleMenu() {
        setisOpen(!isOpen);
    }

    const handleLogout= async() => {
        try {
            const res = await axios({
                withCredentials: true,
                method: "GET",
                url: "http://localhost:5000/api/v1/users/logout",
            });
            if (res.data.status === "success") {
                dispatch(logout());
            }   
        } catch (err:any) {
            alert("Errror: "+err.response.data.message);
        }
        

    }


  if(user.role==='user'|| user.role==='admin') 
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link href={'/'} className={jomhuria.className + ' logo'}>HighLabs</Link>
                <div className='header-buttons'>
                    <p className={jua.className + ' userWelcoming'}>Hello {user.firstName} {user.lastName}</p>
                    <button onClick={handleLogout} className={jua.className + ' logout'}>Logout</button>
                </div>
                <RxHamburgerMenu className='menu-icon' onClick={handleMenu}></RxHamburgerMenu>
            </div>
            <div id="nav" className={isOpen ? "open" : "closed"}>
                <div className='menu'>
                    <Link href="/sign-in" className={jua.className + ' link'}>Logout</Link>
                </div>
            </div>
        </div>
    )
  else 
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link href={'/'} className={jomhuria.className + ' logo'}>HighLabs</Link>
                {/* <div className='header-buttons'>
                    <Link href="/sign-in" className={jua.className + ' signin'}>Sign in</Link>
                    <Link href="/sign-up" className={jua.className + ' signup'}>Sign up</Link>
                </div>
                <RxHamburgerMenu className='menu-icon' onClick={handleMenu}></RxHamburgerMenu> */}
            </div>
            {/* <div id="nav" className={isOpen ? "open" : "closed"}>
                <div className='menu'>
                    <Link href="/sign-in" className={jua.className + ' link'}>Sign in</Link>
                    <Link href="/sign-up" className={jua.className + ' link'}>Sign up</Link>
                </div>
            </div> */}
        </div>
    )
}

export default Header