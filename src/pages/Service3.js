import React from 'react';
import Hero from '../components/Hero';
import service3 from '../assets/images/service3-hero-pg.jpg';

const Service3 = () => {
  return (
    <div>
      <Hero mainText="العمل للغير" imageSrc={service3} />
      <section className="content-section py-5 mt-5">
        <div className="container my-4">
          <p className="mb-4 lh-lg w-75 fs-5">
          شركة إبدأ للاستشارات البيئية والخدمات الصناعية هي جهة معتمدة من جهاز شئون البيئة لتقديم حلول بيئية متكاملة وأعمال القياسات البيئية لكافة الأنشطة والمنشآت الصناعية.
          </p>
          <p className="mb-4 lh-lg w-75 fs-5">
          تقدم الشركة خدمات متخصصة في رصد وقياس مختلف الملوثات البيئية للهواء والماء، إلى جانب تطوير حلول فعّالة لمعالجتها بما يتوافق مع اللوائح والقوانين التنظيمية واشتراطات الجهات الرقابية.
        </p>
          <h4 className="my-5">تشمل خدماتنا المتكاملة:</h4>
          <ul className="d-flex flex-column gap-4 lh-lg fs-5">
            <li>
            القياسات البيئية الدقيقة والشاملة.
            </li>
            <li>
            التحاليل المخبرية المتخصصة للمياه، المواد الخام، والمنتجات.
            </li>
            <li>
            تطبيق معايير السلامة المهنية داخل المصانع والشركات.
            </li>
            <li>
            إعداد الدراسات البيئية الشاملة وتقديم الاستشارات الخاصة، بما في ذلك تقييم الأثر البيئي وإعداد السجلات البيئية.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Service3;
