import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      service_id: "your_service_id", // Replace with your EmailJS service ID
      template_id: "your_template_id", // Replace with your EmailJS template ID
      user_id: "your_user_id", // Replace with your EmailJS user ID
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });
      if (response.ok) {
        alert("تم إرسال رسالتك بنجاح!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("فشل في إرسال الرسالة. حاول مرة أخرى.");
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        {/* Title Section */}
        <div className="col-12 text-center mb-4">
          <h2 className="t-primary fw-semibold">تواصل معنا</h2>
          <p className="text-muted">
            نحن هنا لمساعدتك! لا تتردد في الاتصال بنا لأي استفسارات أو أسئلة.
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                الاسم
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="أدخل اسمك"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                الرسالة
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="اكتب رسالتك هنا"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-secondary w-100">
              إرسال
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title t-primary">معلومات الاتصال</h5>
              <p className="text-muted mb-2">
                <i className="bi bi-envelope me-2"></i> ebdaa5623@gmail.com
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-telephone me-2"></i> 1001058518 20+ 
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt me-2"></i> القاهرة، مصر
              </p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61560319727519&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="t-primary"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a
                  href="https://wa.me/+201001058518"
                  target="_blank"
                  rel="noreferrer"
                  className="t-primary"
                >
                  <i className="bi bi-whatsapp fs-4"></i>
                </a>
                <a
                  href="https://www.instagram.com/ebdaa_co/?igsh=MTQzdWNsbmQ1Mjd5dw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="t-primary"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
