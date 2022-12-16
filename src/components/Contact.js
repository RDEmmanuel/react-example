import React from "react";
import "./Contact.css";

const Contact = ({ title, links }) => {
  return (
    <div
      className="container contact-container d-flex justify-content-center align-items-center"
      id="contact"
    >
      <div className="row text-center">
        <h1 className="contact-title">{title}</h1>
      </div>
      <div className="row row-cols-4 row-cols-md-4 g-4">
        {links.map((item) => {
          return (
            <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-6 p-3">
              <div
                className="contact border border-3 rounded rounded-3 border-warning p-2"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-once="true"
              >
                <a className="" href={item.url}>
                  <img
                    className="img-fluid img-contact"
                    src={item.img}
                    alt=""
                  ></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
