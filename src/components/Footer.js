import React from "react";
import "./Footer.css";

const Footer = ({description}) => {
  return (
    <div className="container-fluid footer-container d-flex align-items-center justify-content-center">
      <div className="row">
        <h4 className="text-white">{description}</h4>
      </div>
    </div>
  );
};

export default Footer;