import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"


const Navbar = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="primary text-white text-center py-1 small">
        <div className="container d-flex justify-content-between align-items-center">
          <div className='d-flex flex-column'>
            <span>د/ عبدالناظر عبدالهادي</span>
            <span className=''>1001058518 20+</span>
          </div>
          <span>ebdaa5623@gmail.com</span>
          <div className='d-flex flex-column'>
            <span>م/ عماد غنيم</span>
            <span>1288375218 20+ </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mb-lg-0 ">
               <li className="nav-item">
              <Link className="nav-link ps-5" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ps-5" to="/من-نحن">
                من نحن
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link ps-5 dropdown-toggle"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الخدمات
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item" to="/القياسات-البيئية">
                  القياسات البيئية
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/الإستشارات-والدراسات-البيئية">
                    الإستشارات والدراسات البيئية
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/العمل-للغير">
                    العمل للغير
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link ps-5" to="/أعمالنا">
                أعمالنا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ps-5" to="/الأجهزة">
                الأجهزة
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ps-5" to="/تواصل-معنا">
                تواصل معنا
              </Link>
            </li>
            </ul>
          </div>

          <a className="navbar-brand" href="#">
            <Link to="/">
            <img src={logo} alt="Logo" width="150" />
            </Link>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
