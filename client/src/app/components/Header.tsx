"use client";

import React, { useState } from 'react'
import "./header.css";
import { RxHamburgerMenu } from 'react-icons/Rx';
import Link from 'next/link';



import { jomhuria, jua } from '../fonts'

function Header() {
    let [isOpen, setisOpen] = useState(false)

    function handleMenu() {
        setisOpen(!isOpen);
    }

  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className={jomhuria.className + ' logo'}>HighLabs</div>
            <div className='header-buttons'>
                <Link href="/sign-in" className={jua.className + ' signin'}>Sign in</Link>
                <Link href="/sign-up" className={jua.className + ' signup'}>Sign up</Link>
            </div>
            <RxHamburgerMenu className='menu-icon' onClick={handleMenu}></RxHamburgerMenu>
        </div>
        <div id="nav" className={isOpen ? "open" : "closed"}>
            <div className='menu'>
                <Link href="/sign-in" className={jua.className + ' link'}>Sign in</Link>
                <Link href="/sign-up" className={jua.className + ' link'}>Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Header