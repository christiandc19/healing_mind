import React from "react";
import "./MissionHome.css";
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content container">
          <h1>Ready to get started?</h1>
          <p>
          Are you ready to reclaim your life and experience the freedom of improved mental health? Our dedicated team is here to guide you every step of the way. Schedule a consultation today and find out if TMS therapy is the right path towards a brighter future.
          </p>

          <h2>
            "It's time to feel better"
          </h2>

          <div className='mission-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
              </LinkRoll>
          </div>

        </div>


      </div>
    </>
  );
};

export default MissionHome;
