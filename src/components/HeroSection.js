import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import desktopImage from '../assets/images/hero-bg.png'; 
import mobileImage from '../assets/images/hero-bg-mobile.png'; 

const HeroSection = () => {
  return (
    <section
      className="hero position-relative text-white d-flex align-items-center"
      style={{
        minHeight: '600px',
      }}
    >
      {/* Background Image */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Mobile Background Image with Media Query */}
      <div
        className="position-absolute w-100 h-100 mobile-bg"
        style={{
          backgroundImage: `url(${mobileImage})`, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Text and Buttons */}
      <div
        className="container position-relative text-center"
        style={{
          zIndex: '2',
        }}
      >
        <div>
          <Link to='/أعمالنا'>
            <Button
              className='btn-secondary p-2'
              text="أعمالنا"
            /> 
          </Link>
          <Link to='/تواصل-معنا'>
            <Button
              className='btn-success p-2'
              text="تواصل معنا"  
            /> 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
