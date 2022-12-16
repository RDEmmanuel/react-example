import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="main-container">
      <div className="row">
        <div className="col">
          <h2 className="title" data-aos="fade-down">
            About me
          </h2>
          <div className="about-me">
            <p>
              Tengo 26 años, vivo en la Ciudad de Corrientes, Argentina. Soy
              estudiante de la carrera Licenciatura en Sistemas de Información
              en la Facultad de Ciencias Exactas de la Universidad Nacional del
              Nordeste (UNNE)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
