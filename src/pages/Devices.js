import React from "react";
import Hero from "../components/Hero";
import devimg from '../assets/images/devices.jpeg'
import p1 from '../assets/images/products/Isokinetic-Sampling-usa-1.jpg'
import p2 from '../assets/images/products/Casella-CEA-TSP-PM10-UK-3.jpg'
import p3 from '../assets/images/products/Gas-Analyzer-Ecom-Ecom-Germany-2.jpg'
import p4 from '../assets/images/products/Kestrel-Heat-Stress-3.jpg'
import p5 from '../assets/images/products/Lancom-4-Portable-Gas-Analyser-1.png'
import p6 from '../assets/images/products/Lux-meter-Testo-545-Germany-6.jpg'
import p7 from '../assets/images/products/Multi-RAE-2.jpg'
import p8 from '../assets/images/products/Sound-level-meter-CASELLA-UK-3.jpg'
import p9 from '../assets/images/products/vibration-meter-pce-vt-2.jpg'

const devices = [
  {
    id: 1,
    name: "جهاز Isokinetic Sampling",
    details: "Apex instrument USA Isokinetic-Sampling",
    image:p1,
  },
  {
    id: 2,
    name: "جهاز Casella Dust -CEA -TSP",
    details: "PM10 - UK",
    image:p2,
  },
  {
    id: 3,
    name: "جهاز Gas Analyzer (Ecom)",
    details: "Ecom - Germany",
    image:p3,
  },
  {
    id: 4,
    name: "جهاز Kestrel Heat Stress",
    details: "",
    image:p4,
  },
  {
    id: 5,
    name: "جهاز Lancom 4 Portable Gas Analyser",
    details: "",
    image:p5,
  },
  {
    id: 6,
    name: "جهاز Lux Meter Testo 545",
    details: "Germany",
    image:p6,
  },
  {
    id: 7,
    name: "جهاز Multi RAE",
    details: "",
    image:p7,
  },
  {
    id: 8,
    name: "جهاز Sound Level Meter",
    details: "CASELLA -UK",
    image:p8,
  },
  {
    id: 9,
    name: "جهاز vibration-meter-pce-vt",
    details: "",
    image:p9,
  },
];

function Devices() {
  return (
      <section>
        <Hero
        mainText="الأجهزة"
        imageSrc={devimg}/>
        <div className="container py-5">

      <div className="d-flex flex-column align-items-center">
        <h3 className="t-primary fw-semibold py-5 fs-2">أحدث التقنيات لقياس المؤشرات البيئية ومعايرة أجهزة القياس بدقة عالية</h3>
        {devices.map((device) => (
          <div
          key={device.id}
            className="card text-white bg-primary mb-4"
            style={{ width: "100%", maxWidth: "700px" }}
            >
            {/* Full-Width Image in Blue Box */}
            <div
              className="rounded-top"
              style={{
                width: "100%",
                height: "150px",
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={device.image}
                alt={device.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensures the image fills the box without distortion
                }}
                />
            </div>
            {/* Card Content */}
            <div className="card-body text-center secondary">
              <h4 className="card-title">{device.name}</h4>
              <p className="card-text">{device.details}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
}

export default Devices;
