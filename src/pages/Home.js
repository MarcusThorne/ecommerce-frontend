import React from 'react'
import { Link } from 'react-router-dom'
import Beans from '../images/beans.jpg'
import Tray from '../images/tray.jpg'
import NiceOriginal from '../images/coffee/niceoriginal.jpg'
import Contact from '../images/contact-us-lettering.webp'
import Blue from '../images/blue-cup.webp'
import Yellow from '../images/yellow-cup.webp'
import Pink from '../images/pink-cup.webp'
import Bean from '../images/bean.webp'

function Home() {
  const imageStyle = {
    maxHeight: '80vh',
    height: '100vh',
    objectFit: 'cover'
  }

  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Beans} className="d-block w-100" alt="..." style={imageStyle} />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className='mb-5'>Specialty Coffee</h1>
              <p className='mb-5'>Why is Coffee so popular? It can be sweet, it can be fruity, it can be anything you choose. It's up to you how your coffee tastes. Just pick the flavour that suits you. We have a variety of blends and origins, so you can have your choice. What are you waiting for, we're the best way to buy coffee beans.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Tray} className="d-block w-100" alt="..." style={imageStyle} />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className='mb-5'>Specialty Coffee</h1>
              <p className='mb-5'>Why is Coffee so popular? It can be sweet, it can be fruity, it can be anything you choose. It's up to you how your coffee tastes. Just pick the flavour that suits you. We have a variety of blends and origins, so you can have your choice. What are you waiting for, we're the best way to buy coffee beans.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className='container mt-5'>Our Favourites</h2>
      <div className="d-flex my-5 row justify-content-around">
        <div className='text-center col'>
          <img src={NiceOriginal} alt='Nice Original Coffee' style={{width: '300px'}} />
          <h5>Nice Original</h5>
          <p>£9.99</p>
        </div>

        <div className='text-center col'>
          <img src={NiceOriginal} alt='Nice Original Coffee' style={{ width: '300px' }} />
          <h5>Nice Original</h5>
          <p>£9.99</p>
        </div>

        <div className='text-center col'>
          <img src={NiceOriginal} alt='Nice Original Coffee' style={{ width: '300px' }} />
          <h5>Nice Original</h5>
          <p>£9.99</p>
        </div>

        <div className='text-center col'>
          <img src={NiceOriginal} alt='Nice Original Coffee' style={{ width: '300px' }} />
          <h5>Nice Original</h5>
          <p>£9.99</p>
        </div>
      </div>

      <div className='d-flex container p-5 border my-5 border-4 border-dark rounded'>
        <div>
          <h1>Taste Guaranteed or Money Back!</h1>
          <p>We want to help everyone find the best coffee for them, that's why we will give you your money back if the coffee doesn't quench your thirst, or we can send you out a new bag! We aim to be there for you all, all you have to do is reach out.</p>
        </div>
        <img src={Contact} alt='Contact Us Lettering' style={{ width: '300px' }} />
      </div>

      <div className='row container mx-auto my-5' >
        <img src={Blue} className='rounded col' alt='' style={{ width: '300px' }} />
        <img src={Yellow} className='rounded col' alt='' style={{ width: '300px' }} />
        <img src={Pink} className='rounded col' alt='' style={{ width: '300px' }} />
      </div>
    </>
  )
}

export default Home
