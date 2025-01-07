import React, { useEffect, useState } from 'react';

const Hero = ({ mainText, sideText ,imageSrc }) => {
  const [image, setImage] = useState(imageSrc);

  useEffect(() => {
    // Re-trigger image update when the `imageSrc` prop changes
    setImage(imageSrc);
    console.log('Loaded Image:', imageSrc);

  }, [imageSrc]);

  return (
    
    <div className="d-flex flex-column position-relative">
      {/* Image at the top-left */}
      <div
        className="hero-section position-absolute"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '600px',
          top: '50%',
          left: '0',
          transform: 'translateY(-15%)',
          zIndex: '2',
        }}
      ></div>

      {/* Blue box on the right */}
      <div
        className="d-flex position-relative"
        style={{
          zIndex: '1',
          marginBottom: '50px', // Avoid overlap with the section below
        }}
      >
        <div
          className="text-box primary text-white"
          style={{
            backgroundColor: '#007bff',
            width: '90%',
            maxWidth: '700px',
            height: '300px',
            display: 'flex',
            paddingTop:"50px",
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          <div>
          <h1 className="display-5 fw-bold text-center">{mainText}</h1>
          {/* <p className='w-75 pe-4 pt-4 lh-lg' style={{fontSize:'14px'}}>{sideText}</p> */}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;



