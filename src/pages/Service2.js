import React from 'react';
import Hero from '../components/Hero';
import service2 from '../assets/images/service2-hero-pg.jpg';

const Service2 = () => {
  return (
    <div>
      <Hero mainText="الاستشارات والدراسات البيئية" imageSrc={service2} />
      <section className="content-section py-5 mt-5">
        <div className="container my-4">
          <p className="mb-4 lh-lg fs-5">
          إعداد دراسات تقييم التأثير البيئى لكافة القطاعات 
          ( الصناعية - السياحية - البترولية - الزراعية - البنية الأساسية )
          </p>
          <h4 className="my-5"></h4>
          <ul className="d-flex flex-column gap-4 lh-lg fs-5">
            <li>
            إعداد خطط الإلتزام البيئى وتوفيق الأوضاع البيئية للمشروعات القائمة ومتابعة تنفيذها.
            </li>
            <li>
            أعمال القياسات البيئية.
            </li>
            <li>
            إعداد و تحديث ومراجعة السجلات البيئية ( سجل الحالة البيئية - سجل المواد والمخلفات الخطرة - سجل المخلفات الصناعية)
            </li>
            <li>
            أعمال نقل والتخلص الآمن من المخلفات الصلبة والسائلة الخطرة والغير الخطرة.
            </li>
            <li>
            نقل المواد الخطرة.
            </li>
            <li>
            استخراج تراخيص أنشطة الإدارة المتكاملة للمواد والمخلفات الخطرة وغير الخطرة من جهاز تنظيم إدارة المخلفات.            </li>
            <li>
            استخراج تراخيص تشغيل المنشآت الصناعية.
            </li>
            <li>
            استخراج السجلات الصناعية.            
            </li>
            <li>
            إعداد تقارير الوقاية من أخطار الحريق.
            </li>
            <li>
            إعداد وتنظيم البرامج والدورات التدريبية فى المجال البيئى.
            </li>
            <li>
            تأسيس الشركات وإجراء التعديلات على السجلات التجارية.
            </li>
            <li>
            تقديم خدمات توريد وتركيب المعدات اللازمة لشبكة مكافحة الحريق
            محطات معالجة الصرف الصحى            
            </li>
            <li>
            دراسات تقييم الأثر البيئى وإعداد خطط الإلتزام البيئى وتوفيق الأوضـــاع لمحطــــات معالجــة ميـــاه الصـــرف الصحـــى ودراســــات التوسعـــات والإنشـــاءات الجـديـدة بهــا وتحليــل عينــات السيــب النهائــى وتنسيـق السجـلات البيئيـة الخـاصة بالمحطة والتعاقد بخـصوص التخلص الآمـن من مخلفات الصـرف الناتجة عـن معالجة مياه الصرف
            </li>
          </ul>
        
        </div>
      </section>
    </div>
  );
};

export default Service2;