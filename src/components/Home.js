import React from "react";
import "./Home.css";

const Home = ({ hi, name, subtitle, description, image }) => {
  return (
    <div className="container main-content" id="home">
      <div className="row">
        <div className="col-lg-7 column">
          <h3 className="text-yellow hi">{hi}</h3>
          <h1
            className="name text-white"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-once="true"
          >
            {name}
            <br></br>
          </h1>
          <h2 className="subtitle text-yellow">{subtitle}</h2>
          <p className="text-white p-2 about-me">{description}</p>
        </div>
        <div className="col-lg-5">
          <div className="text-center">
            <img src={image} alt="..." className="img-fluid imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
