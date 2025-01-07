import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Projects from './Projects';
function Ourworks() {
  
  return (
    <section className="py-5">
      <div className="container">
      <div className='row'>
      <h2 className="text-center mb-4 t-primary fw-bold mt-2">أعمالنا</h2>
      </div>
        <Projects/>
        <div className='row'>
        <Link className='nav-link text-center pt-5' to='/أعمالنا'>
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

export default Ourworks;