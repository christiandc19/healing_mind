import React from 'react'
import Fade from 'react-reveal/Fade';
import './TMS-Therapy-Section.css'

import section2 from '../../assets/tms-section3.jpg'

const TMSSection = () => {
  return (
    <>
<div className='TMSSection-wrap '>

<div className='TMSSection-wrap-content container'>
    <Fade left>
        <div className="TMSSection-left">
            <img src={section2} alt="banner" border="0" />
        </div>
    </Fade>


    <Fade right>
    <div className="TMSSection-right">
        <h1>How Does Kings TMS Therapy Work?</h1>        
        <br/>
        <p>Transcranial magnetic stimulation (TMS) involves brief outpatient procedures. Our Kings TMS Therapy Clinic sessions do not cause significant disruption to your life. Each session lasts between 20 and 40 minutes. Most patients will attend five sessions per week over five to six weeks. Because TMS is a noninvasive outpatient procedure, you should be able to travel on your own to and from appointments and return to work or your usual routine immediately after the session. 
        <br /> <br />
        The procedure begins when we place a coil near your head. The coil is a magnetic field generator, and it uses magnetic pulses similar to those employed by magnetic resonance imaging (MRI) machines. These pulses create small electric currents in specific areas of your brain where low activity causes depression. Although you will not feel the electric currents, they activate neurons and enhance brain functioning.</p>
        <br />

    </div>
    </Fade>

</div>
</div>  


   </>
  )
}

export default TMSSection




