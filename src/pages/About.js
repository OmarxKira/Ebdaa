import React from 'react';
import Hero from '../components/Hero';
import about from '../assets/images/about-hero-bg.jpg'
import OnlyCertificates from '../components/OnlyCertificates';
import certi1 from '../assets/images/certificates/iso45001.png'
import certi2 from '../assets/images/certificates/iso9001.png'
import certi3 from '../assets/images/certificates/ohas.png'
import certi11 from '../assets/images/certificates/certi11.jpeg'
import certi22 from '../assets/images/certificates/certi22.jpeg'
import certi33 from '../assets/images/certificates/certi33.jpeg'


function About() {

  const certificates = [
    { icon: certi1 },
    { icon: certi2 },
    { icon: certi3 },
  ];
  const certificates2 = [
    { icon: certi11 },
    { icon: certi22 },
    { icon: certi33 },
  ];

  return (
    <div>
      <Hero
        mainText="من نحن"
        sideText="تُعد شركة إبدأ للاستشارات البيئية والخدمات الصناعية واحدة من الشركات الرائدة في مصر بمجال القياسات البيئية وتقديم الاستشارات المتخصصة للمنشآت الصناعية والشركات باستخدام أحدث التقنيات وأجهزة القياس المتقدمة. تضم الشركة فريقاً من الخبراء المعتمدين من جهاز شئون البيئة، المتخصصين في إجراء القياسات والدراسات البيئية والرصد البيئي بفاعلية وكفاءة."
        imageSrc={about}/>
      
      <section className='container pt-4 mt-4 fs-5'>
       <div>
       <h1 className='t-primary fw-semibold w-75 mt-5'>التأسيس</h1>
       <div className=' w-75 pe-5 py-4'>
       <p>تم تأسيس شركة إبدأ بواسطة مجموعة من الاستشاريين المتخصصين في القياسات البيئية بهدف تعزيز مفاهيم البيئة والتنمية المستدامة</p>
       <p>تسعى الشركة إلى تقديم حلول مبتكرة وشاملة تساعد المؤسسات على الإلتزام بالمعايير البيئية العالمية</p>
         <p>كما نعمل على دعم جهود الحفاظ على الموارد الطبيعية وضمان مستقبل أكثر إستدامة للأجيال القادمة</p>
       </div>
       </div>
       <div>
       <h1 className='t-primary fw-semibold w-75 lh-base'>ريادة بيئية وحلول مبتكرة لتحقيق التنمية المستدامة</h1>
       <div className=' w-75 pe-5 py-4'>
       <p>تستخدم الشركة أساليب تقنية حديثة لتوفير حلول مبتكرة لمعالجة القضايا البيئية الراهنة</p>
       <p>تلتزم الشركة بتقديم خدمات الاستشارات البيئية للمنشآت الصناعية بأفضل الممارسات المعتدمة وأجهزة
        والأدوات التكنولوجية المتطورة , ما يجعلها شريكاً فعالاً في تحقيق التنمية المستدامة
       </p>
       <p>كما تساهم شركة إبدأ بفعالية في تنظيم الدورات التدريبية وورش العمل حول القضايا البيئية الرئيسية، وذلك بمشاركة أساتذة متخصصين من الجامعات والمؤسسات البحثية المصرية لتدريب الكوادر المتخصصة في هذا المجال.</p>
       </div>
       </div>
       <div>
       <h1 className='t-primary fw-semibold w-75'>بعض من شهادات الجوده</h1>
       <div>
       <div className=' w-75 pe-5 py-4'>
       <p>
       شركة إبدأ للخدمات البيئية حصلت على مجموعة متنوعة من شهادات الجودة التي تعكس التزامها المستمر بالمعايير العالمية وحرصها على تقديم أفضل الخدمات. من بين هذه الشهادات ISO 9001، التي تؤكد التزام الشركة بإدارة الجودة وفقًا لأعلى المعايير، لضمان تحقيق أعلى مستويات رضا العملاء. كما تُظهر شهادة ISO 14001 حرص إبدأ على تنفيذ سياسات بيئية مسؤولة ومستدامة، بهدف الحد من الأثر البيئي لعملياتها.
       بالإضافة إلى ذلك، نالت الشركة شهادة ISO 45001، مما يثبت التزامها بتوفير بيئة عمل آمنة وصحية لجميع موظفيها وشركائها، وتعزيز ثقافة الصحة والسلامة في بيئة العمل. وأخيرًا، تؤكد شهادة ISO 17025 على كفاءة الشركة في إجراء الاختبارات والمعايرات بدقة عالية، مما يضمن موثوقية نتائجها. هذه الشهادات تمثل دليلاً قوياً على تفاني شركة إبدأ في الجودة، حماية البيئة، وصحة العاملين وسلامتهم.
       </p>
       </div>
       <OnlyCertificates certificates={certificates} />


       </div>
       </div>
       <div className='my-5'>
       <h1 className='t-primary fw-semibold w-75 py-5 lh-base'>شهادات الاعتماد الدولية التي حصلت عليها شركة إبدأ</h1>
       <div>
       <OnlyCertificates
        certificates={certificates2}
        iconHeight="300px"
        iconWidth="300px" />
       </div>
        <h3 className='text-center t-primary py-5'>لمزيد من التفاصيل</h3>
        <div className="text-center">
          <a
            href="/documents/Ebdaa_Profile.pdf" // Path to the PDF in the public folder
            download="EbdaaProfile.pdf" // Suggested file name for the download
            className="btn btn-secondary fs-5 text-decoration-underline"
          >
            من نحن PDF
          </a>
        </div>
        <div className="text-center pt-3">
          <a
            href="/documents/Our_Services.pdf" // Path to the PDF in the public folder
            download="OurServices.pdf" // Suggested file name for the download
            className="btn btn-secondary fs-5 text-decoration-underline px-3"
          >
            خدماتنا PDF
          </a>
        </div>
       </div>
      </section>
    </div>
  );
}

export default About;