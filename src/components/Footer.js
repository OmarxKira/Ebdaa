import React from 'react';
import logo2 from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer primary text-white py-4">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-4 d-flex flex-column gap-3">
            <img src={logo2} alt="Logo" width="180" />
            <p className="w-75">
              تُعد شركة إبدأ للاستشارات البيئية والخدمات الصناعية واحدة من الشركات الرائدة في مصر بمجال القياسات
              البيئية وتقديم الاستشارات المتخصصة للمنشآت الصناعية والشركات بإستخدام أحدث التقنيات وأجهزة القياس المتقدمة
            </p>
            <div className="d-flex gap-3 mt-3">
            <a
                  href="https://www.facebook.com/profile.php?id=61560319727519&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a
                  href="https://wa.me/+201001058518"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-whatsapp fs-4"></i>
                </a>
                <a
                  href="https://www.instagram.com/ebdaa_co/?igsh=MTQzdWNsbmQ1Mjd5dw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
          </div>
          <div className="col-md-4 py-4">
            <h4 className="pb-2">خدماتنا</h4>
            <ul className="mb-lg-0 list-unstyled d-flex flex-column gap-2">
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white"to="/القياسات-البيئية">
              القياسات البيئية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white" to="/الإستشارات-والدراسات-البيئية">
                  الإستشارات والدراسات البيئية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white" to="/العمل-للغير">
                  العمل للغير
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white" to="/من-نحن">
                  من نحن
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white" to="/الأجهزة">
                  الأجهزة
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-inline text-decoration-none text-white" to="تواصل-معنا">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex flex-column gap-4 my-auto">
            <div className="d-flex flex-column">
              <span>د/ عبدالناظر عبدالهادي</span>
              <span>1001058518 20+</span>
            </div>
            <div className="d-flex flex-column">
              <span>م/ عماد غنيم</span>
              <span>1288375218 20+</span>
            </div>
            <span className="text-decoration-underline">
              <p className="d-inline nav-link">ebdaa5623@gmail.com</p>
            </span>
          </div>
        </div>
        <div className="row mt-2">
          <hr />
          <div className="d-flex gap-5 justify-content-center" style={{ fontSize: '12px' }}>
            <p>جميع الحقوق محفوظة © شركة إبدأ 2024</p>
            <p>
              تم التطوير بواسطة{' '}
              
              <a
                  href="https://github.com/OmarxKira"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-underline"
                >
                  @OmarAlsayed
                </a>
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
