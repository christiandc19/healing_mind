import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
// import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/kings-vbg2.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">



            <div className="content">
                        <h1 className='fade-in one'>It's time</h1>
                        <h1 className="fade-in two">to feel<span className="fade-in three"> better.</span></h1>
                        <h2 className='fade-in four'> Find out how TMS can help you overcome depression.</h2>
                        <br />
                        <div className='hero-btns'>

                        <div className='hero-btn fade-in four'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                        <button>CALL US</button>
                        </Link>
                        </LinkRoll>
                        </div>

                        <div className='hero-btn fade-in four hero-btn2'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/tms-therapy">
                        <button>LEARN MORE</button>
                        </Link>
                        </LinkRoll>
                        </div>


                        </div>

                    <br />
                    <div className='fade-in five'>
                    <p><i>Reigniting Hope, Restoring Lives.</i></p>
                    </div>
                </div>





            </div>
        </div>


</>

    )
}

export default Hero