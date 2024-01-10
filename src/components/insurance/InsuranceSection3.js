import React from "react";
import "./InsuranceSection3.css";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import insuranceSection3img from "../../assets/insuranceSection3.jpg";

const InsuranceSection3 = () => {
  return (
    <>
      <div className="insuranceSection3 ">
        <div className="insuranceSection3-content container">

          <div className="insuranceSection3-content-left">
          <img src={insuranceSection3img} alt="nurse" loading="lazy"/>
          </div>
        

          <div className="insuranceSection3-content-right">
          <Fade right>
            <h1>Coverage</h1> <br />
          </Fade>

          <Fade left>
            <h2>
              <i>We handle all the paperwork for you.</i>
            </h2>
          </Fade>

            <br />
          
          <Fade right>
            <p>
            Kings TMS Therapy Clinic accepts most insurance plans including Medicare. Most of our patients receive coverage for transcranial magnetic stimulation (TMS) through their insurance providers.
            Our staff is happy to assist you with determining whether your insurance plan covers TMS treatments, guiding you through the insurance process, and discussing your options.  <br />
            </p>
          </Fade>
        
            <br />

          <Fade right>
            <p>
            During your consultation, a patient consultant will discuss any questions you may have regarding insurance coverage, costs, payments and reimbursement.
            </p>
          </Fade>

            <div className="insurance-section3-btn">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">
                      <button>Call Us</button>
                    </Link>
                    </LinkRoll>
            </div>

          </div>
        </div>


      </div>
    </>
  );
};

export default InsuranceSection3;
