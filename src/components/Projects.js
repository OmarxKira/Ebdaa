import React from 'react'
import p1 from"../assets/images/projects/project-1.jpeg"
import p2 from"../assets/images/projects/project-2.jpeg"
import p3 from"../assets/images/projects/project-3.jpeg"
import p4 from"../assets/images/projects/project-4.jpeg"
import p5 from"../assets/images/projects/project-5.jpeg"
import p6 from"../assets/images/projects/project-6.jpeg"
import p7 from"../assets/images/projects/project-7.jpeg"
import p8 from"../assets/images/projects/project-8.jpeg"
import p9 from"../assets/images/projects/project-9.jpeg"
import p10 from"../assets/images/projects/project-10.jpeg"
import p11 from"../assets/images/projects/project-11.jpeg"
import p12 from"../assets/images/projects/project-12.jpeg"
import p13 from"../assets/images/projects/project-13.jpeg"
import p14 from"../assets/images/projects/project-14.jpeg"
import p15 from"../assets/images/projects/project-15.jpeg"
import p16 from"../assets/images/projects/project-16.jpeg"
import p17 from"../assets/images/projects/project-17.jpeg"
import p18 from"../assets/images/projects/project-18.jpeg"
import p19 from"../assets/images/projects/project-19.jpeg"
import p20 from"../assets/images/projects/project-20.jpeg"
import p21 from"../assets/images/projects/project-21.jpeg"
import p22 from"../assets/images/projects/project-22.jpeg"
import p23 from"../assets/images/projects/project-23.jpeg"
import p24 from"../assets/images/projects/project-24.jpeg"
import p25 from"../assets/images/projects/project-25.jpeg"
import p26 from"../assets/images/projects/project-26.jpeg"

const Projects = () => {
    const certificates = [
        { icon: p1 },
        { icon: p2},
        { icon: p3},
        { icon: p4},
        { icon: p5},
        { icon: p6},
        { icon: p7},
        { icon: p8},
        { icon: p9},
        { icon: p10},
        { icon: p11},
        { icon: p12},
        { icon: p13},
        { icon: p14},
        { icon: p15},
        { icon: p16},
        { icon: p17},
        { icon: p18},
        { icon: p19},
        { icon: p20},
        { icon: p21},
        { icon: p22},
        { icon: p23},
        { icon: p24},
        { icon: p25},
        { icon: p26},
      ];
  return (
    
    <div>
   
  <div className="row">
          {certificates.map((certificate, index) => (
            <div key={index} className="col-md-4">
              <div className="d-flex justify-content-center">
                <img
                  src={certificate.icon}
                  alt={certificate.title}
                  style={{width:"370px" , height:"240px", marginTop:"20px"}}
                />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects