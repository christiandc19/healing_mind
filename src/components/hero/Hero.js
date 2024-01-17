import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Zoom duration={1000}>
      <h1>HEALING <span>MIND</span> </h1>
    </Zoom>
    <Zoom duration={3000}>
    <h1>TMS <span>THERAPY</span></h1>
    </Zoom>

    <Zoom duration={4000}>
    <h2>Find out how TMS can help you overcome depression</h2>
    </Zoom>

    <Zoom duration={5000}>
    <p>" It's Time To Feel Better "</p>
    </Zoom>

    <Zoom duration={4500}>
    <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
          <Link to="/contact">
            <div className="hero-btn">
              <button>CALL US</button>
            </div>
          </Link>
      </LinkRoll>
    </Zoom>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
