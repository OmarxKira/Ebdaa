import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import OnlyCertificates from './OnlyCertificates';
import certi1 from '../assets/images/certificates/iso45001.png'
import certi2 from '../assets/images/certificates/iso9001.png'
import certi3 from '../assets/images/certificates/ohas.png'

function Certificates() {

  const certificates = [
    { icon: certi1 },
    { icon: certi2 },
    { icon: certi3 },
  ];
 
  
  return (
    <section className="py-5">
      <div className="container">
      <div className='row'>
      <h2 className="text-center mb-4 t-primary fw-bold">بعض من شهادات الجودة</h2>
      </div>
      <OnlyCertificates certificates={certificates} />
        <div className='row'>
        <Link className='nav-link text-center pt-5' to='/من-نحن'>
        <Button
                   className='btn-secondary fs-5'
                    text="لمعرفة المزيد"
                    textDecoration={true}
                  /> 
        </Link>

    
        </div>
        </div>
    </section>
  );
}

export default Certificates;