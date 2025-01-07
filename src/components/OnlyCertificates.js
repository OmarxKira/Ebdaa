import React from 'react';

function OnlyCertificates({ certificates, iconWidth, iconHeight }) {
  return (
    <div className="row">
      {certificates.map((certificate, index) => (
        <div key={index} className="col-md-4">
          <div className="d-flex justify-content-center">
            <img
              src={certificate.icon}
              alt={`Certificate ${index + 1}`}
              style={{
                width: iconWidth || "370px", 
                height: iconHeight || "240px",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnlyCertificates;
