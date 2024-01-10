import React from 'react'
import './TMS-Section3.css'
import section4 from '../../assets/tms-section2-2.jpg'
import Fade from 'react-reveal/Fade';

const TMSSection3 = () => {
  return (
    <>
      <div className='tms-section3'>
        <div className='tms-section3-content container'>
            <div className='tms-section3-flex'>

                <Fade left>
                <div className='tms-section3-left'>
                  <p>Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.</p><br />
                    <p>You will remain awake during these short, non-convulsive, non-invasive procedures. They should not hurt, although some patients may have mild headaches or scalp discomfort. TMS does not cause memory loss, and your magnetic field exposure throughout the course of the treatment, which is less than you would receive from an MRI, is minimal.</p>
                    <br />
                    <p>
                    Our patients report results such as improved mood, increased energy levels, improved diet and lifestyle choices, reduced anxiety, and much more. With Kings TMS Therapy Clinic, patients are able to begin reclaiming their lives, as many report regaining interest in daily activities. Kings TMS Therapy Clinic offers patients major conveniences such as extended hours and a convenient location in Los Angeles.</p>
                    <br />
                </div>
                </Fade>

                <Fade right>
                <div className='tms-section3-right'>
                    <img src={section4} alt="banner" border="0" />
                </div>
                </Fade>

            </div>
        </div>

      </div>
    </>
  )
}

export default TMSSection3
