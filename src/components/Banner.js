import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/images/headphones.jpeg" className="d-block w-100" width={600} height={460}  alt="banner slide 1"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Boat Premium Headset</h5>
            <p>Immerse yourself in unparalleled audio quality with our cutting-edge headsets.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image src="/images/watch.jpeg" className="d-block w-100" width={600} height={460} alt="banner slide 2"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Titan Cool Watches</h5>
            <p>Elevate your style and functionality with our sleek and innovative watches.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image src="/images/camera.jpeg" className="d-block w-100" width={600} height={460} alt="banner slide 3"/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark'>Some Awesome Cameras</h5>
            <p className='text-dark'>Capture life's moments in stunning detail with our state-of-the-art cameras.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner