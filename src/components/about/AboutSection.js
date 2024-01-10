import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-1.webp";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">

        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>Welcome to Kings TMS Therapy Clinic</h1>
            <p>
            At Kings TMS Therapy Clinic, we're dedicated to providing innovative and effective solutions for mental health challenges. Our team of experienced professionals is committed to delivering compassionate care, utilizing cutting-edge Transcranial Magnetic Stimulation (TMS) therapy.
            </p>

            <h1>Our Mission</h1>
            <p>
            We believe that mental health is just as important as physical health. Our mission is to offer a ray of hope to individuals struggling with depression, anxiety, and other mood disorders. Through personalized TMS therapy, we aim to improve lives and promote mental well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
