'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.css'
const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='nav'>
            <div className='left'>MY APP</div>
            <div className='right'>
                <Link className={`link ${pathname === '/home' ? 'active' : ''}`} href="/home">Home</Link>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</Link>
                <Link className={`link ${pathname === '/auth/login' ? 'active' : ''}`} href="/auth/login">Login</Link>
            </div>
        </div>
    );
};
export default Navbar;