import React from "react";
import "./Skills.css";

const Skills = ({ title, skills }) => {
  return (
    <div className="container-fluid skills-container" id="skill">
      <div className="container">
        <div className="row text-center">
          <h1 className="skills-title">{title}</h1>
        </div>
        <div className="row text-center">
          {skills.map((image) => {
            return (
              <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-6 p-3">
                <div
                  className="skill p-2"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-once="true"
                >
                  <img
                    className="img-fluid image"
                    src={image.img}
                    alt="..."
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
