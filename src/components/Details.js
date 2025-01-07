import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import vector from "../assets/images/icons/Vector.png"
import vector1 from "../assets/images/icons/Vector-1.png"
import vector2 from "../assets/images/icons/Vector-2.png"
function Details() {
  
  const details = [
    { title: 'شركات ناجحة مع كبرى الشركات والمؤسسات الصناعية في مصر', icon: vector2 },
    { title: 'إستخدام أحدث التقنيات وأجهزة القياس المتطورة', icon: vector1},
    { title: 'فريق عمل من الخبراء والإستشاريين المعتمدين من جهاز شئون البيئة', icon: vector},
  ];
  
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {details.map((detail, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="d-flex">
              <div>
                  <h5 className="card-title pt-4 t-primary" style={{width:"80%"}}>{detail.title}</h5>
                </div>
                <LazyLoadImage
                  src={detail.icon}
                  alt={detail.title}
                  style={{width:"70px" , height:"70px", marginTop:"20px"}}
                  effect='blur'
                />
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}

export default Details;