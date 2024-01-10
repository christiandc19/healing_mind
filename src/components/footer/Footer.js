import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo-2.png";
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <img
                src={logo}
                alt="Kings TMS"
                loading="lazy"
              />
            </div>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsFillArrowUpCircleFill className="icon" />
            </LinkRoll>
          </div>
          <div className="col-container">
            <div className="footer-col">
              <h1>COMPANY</h1>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/about-us">
                  <p>About Us</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/faq">
                  <p>FAQs</p>
                </Link>
              </LinkRoll>
            </div>

            <div className="footer-col">
              <h1>Navigation</h1>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/">
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/insurance">
                  <p>Insurance</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="footer-col">
              <h1>SERVICES</h1>
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/tms-therapy">
                  <p>TMS Therapy</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/nasal-esketamine">
                  <p>Nasal Esketamine</p>
                </Link>
              </LinkRoll>


              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health-quizzes">
                  <p>Mental Health Quiz</p>
                </Link>
              </LinkRoll>

            </div>

          </div>
          <p className="copyright">
            <p>
              &copy; 2023 Kings TMS Therapy Clinic Inc. All
              rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
