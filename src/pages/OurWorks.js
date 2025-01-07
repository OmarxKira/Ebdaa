import React from 'react';
import Hero from '../components/Hero';
import Service3 from '../assets/images/service3-hero-pg.jpg';
import Projects from '../components/Projects';

const OurWorks = () => {
  return (
    <div>
      <Hero mainText="أعمالنا" imageSrc={Service3} />
      <div className="container w-75 my-5 pt-5">
        <p className="fs-5 lh-lg t-primary">
          في إبدأ، نؤمن بأن تقديم حلول شاملة ومبتكرة هو مفتاح النجاح. بفضل فريقنا المتمرس وخبراتنا
          المتنوعة، نعمل على تقديم خدمات متكاملة تلبي احتياجات عملائنا في مجالات متعددة. تشمل أعمالنا
          حلولًا في إدارة المشاريع، الاستشارات التجارية، تطوير البرمجيات، وخدمات التصميم المتقدمة.
        </p>
        <Projects />
        <h3 className="text-center t-primary py-5">لمزيد من التفاصيل</h3>
        <div className="text-center">
          <a
            href="/documents/Our_Works.pdf" // Path to the PDF in the public folder
            download="OurWork.pdf" // Suggested file name for the download
            className="btn btn-secondary fs-5 text-decoration-underline"
          >
            أعمالنا PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
