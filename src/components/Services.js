import React from 'react';
import help from '../assets/images/icons/help.png';
import book from '../assets/images/icons/book.png';
import ruler from '../assets/images/icons/ruler-and-pen.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Services = () => {
  const services = [
    { title: 'القياسات البيئية', icon: ruler, path:"/القياسات-البيئية" },
    { title: 'الاستشارات والدراسات البيئية', icon: book, path:"/الإستشارات-والدراسات-البيئية" },
    { title: 'العمل للغير', icon: help,  path:"/العمل-للغير" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 t-primary fw-bold">خدماتنا</h2>
        <p className='text-center fs-5 t-primary'>
          نوفر حلولا شاملة لدعم المشاريع بيئياً من خلال التحليل المتخصص
          والتوجيه المهني لضمان الإلتزام بأعلى معايير الجودة والإستدامة
        </p>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center shadow h-100">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="card-img-top mx-auto mt-3"
                  style={{ width: '80px' }}
                />
                <div className="card-body">
                  <h5 className="card-title py-3 t-primary">{service.title}</h5>
                  <Link className='nav-link' to={service.path}>
                    <Button
                      className='btn-secondary'
                      text="إقرء المزيد"
                      icon={<i className="bi bi-arrow-right"></i>}
                      iconPosition='after'
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
