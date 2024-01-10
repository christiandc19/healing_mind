import React from 'react'
import './Section2B.css'

import Fade from 'react-reveal/Fade';

import Card1 from '../../assets/section2-1-min.jpg'
import Card2 from '../../assets/section2-2-min.jpg'
import Card3 from '../../assets/section2-3-min.jpg'
import Card4 from '../../assets/section2-4-min.jpg'

const Section2B = () => {
  return (
    <>
          <div className="section2-cards">
            <div className='section2-flex'>

                    <Fade left>
                    <div className='section2-flexItem'>
                        <img src={Card1} alt="Mental Health" loading="lazy"/>
                        <h1>NON-DRUG AND FDA-CLEARED</h1>
                        <p>Non-invasive with no drug-related side effects.</p>                        
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='section2-flexItem'>
                        <img src={Card2} alt="Mental Health" loading="lazy"/>
                        <h1>COVERED BY MOST INSURANCE</h1>
                        <p>We accept most insurance plans, ensuring that you receive the care you need.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='section2-flexItem'>
                        <img src={Card3} alt="Mental Health" loading="lazy"/>
                        <h1>FITS INTO YOUR EXISTING TREATMENT</h1>
                        <p>Can be stand-alone treatment or along with your existing medication.</p>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className='section2-flexItem'>
                        <img src={Card4} alt="Mental Health" loading="lazy"/>
                        <h1>ZERO DOWNTIME</h1>
                        <p>Drive yourself to and from treatments. Get back to your day right away, including work or school.</p>
                    </div>
                    </Fade>
                    
    </div>
</div>
    </>
  )
}

export default Section2B
