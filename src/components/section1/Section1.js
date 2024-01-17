import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import section1 from '../../assets/apollo-tms-therapy-system-callouts-1.png'

const Section1 = () => {
  return (


    
    <>

      <div className="section1">

        <div className="section1-content">
        <Zoom duration={2000}>
          <div className="section1-left">
            <img src={section1} alt="banner" border="0" />
          </div>
        </Zoom>

        <Fade bottom>
          <div className="section1-right">
              <h1>Unlock a New Era of Mental Health with TMS Therapy</h1>
              <p>Welcome to our cutting-edge Transcranial Magnetic Stimulation (TMS) Center, where science meets compassion to revolutionize mental health care. Healing Mind therapy harnesses the power of magnetic fields to stimulate targeted regions of the brain, offering a safe, non-invasive, and remarkably effective treatment for depression, anxiety, and a range of neurological conditions. Our dedicated team of board-certified professionals combines expertise with genuine empathy, ensuring every individual receives personalized care and support on their journey towards renewed well-being. <br/> <br/>At Healing Mind Therapy Clinic, we believe in reshaping lives through innovation, providing hope and healing for those seeking a brighter, more fulfilling future. Explore our state-of-the-art facility, meet our experienced team, and discover how Healing Mind therapy is redefining mental health treatment. Take the first step towards transformative, evidence-based care today. Your path to a healthier mind begins here.</p><br/>

              <div className="section1-link">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/tms-therapy">
                      <p>Revolutionizing Mental Health: <Link to="/tms-therapy"><span>Transcranial Magnetic Stimulation (TMS)</span> </Link> Explained</p>
                    </Link>
                    </LinkRoll>
              </div>
          </div>
        </Fade>  

        </div>

      </div>
    </>
  );
};

export default Section1;
