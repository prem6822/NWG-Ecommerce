import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <Image className='brand-logo' src='/images/nwg-logo.jpeg' width={300} height={150} alt='nwg logo'/>
      <h1 class="display-5 fw-bold text-body-emphasis">NWG, quick & safe</h1>
      <div class="col-lg-6 mx-auto">

        <p class="lead mb-4">Welcome to NWG, your go-to e-commerce destination for swift and secure deliveries. With our advanced logistics, we guarantee speedy service without compromising safety of your products. Shop the latest trends and essentials with confidence, knowing your items are in reliable hands.</p>
        <p class="lead mb-4">Experience hassle-free browsing and ordering on our user-friendly website, supported by our responsive customer service. Elevate your online shopping with NWG : Where Speed Meets Security.</p>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={signIn}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login