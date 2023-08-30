'use client';
import {signOut, useSession} from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsCart4} from 'react-icons/bs'
import { getCartItems } from '@/utils/cartitems';

function Header() {

  const [cart, setCart] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      const cartItems = getCartItems();
      setCart(cartItems?.length)
    },1000)
  },[])
    const session = useSession();
    const name = session?.data?.user?.email;
    return (
    <>
        <nav className="navbar navbar-top-bg text-white d-none d-md-block">
          <div className="container-md">
            <i className='nav-item navbar-nav'>Get Up to 70% Discount Everyday</i>  
            {
              name ?
              (
                <div className='dropdown p-0'>
                  <span className='dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded='false'>{name}</span>
                  <ul className='dropdown-menu'>
                    <li>
                      <p className='sign-out-button dropdown-item' onClick={signOut}>LogOut</p>
                    </li>
                  </ul>
                </div> 
              ):
              (
                <div className='p-0'>
                  Hello guest!!
                </div> 
              )
            }
          </div>
        </nav>
        <nav className="navbar navbar-bg text-white">
          <div className="container-md">
            <Link href='/' className='navbar-brand'>
              <Image className='brand-logo' src='/images/nwg-logo.jpeg' width={100} height={50} alt='nwg logo' />
            </Link> 
            <Link href='/cart' className='nav-item nav-link d-flex gap-1 align-items-center text-white'>
              <span className='p-1 rounded-circle bg-primary'>
                <BsCart4 size={21} className='pb-1'/>
               
              </span>
              {cart} items
            </Link>  
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link href='/' className='nav-item nav-link active'>Store</Link>
                <Link href='/about' className='nav-item nav-link active'>About Us</Link>
                <Link href='/support' className='nav-item nav-link active'>Support Us</Link>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Header