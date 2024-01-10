import React from 'react'
import './TMS-Section2.css'
import Fade from 'react-reveal/Fade';
import section2 from '../../assets/tms-section2.jpg'

const TMSSection2 = () => {
  return (
    <>
      <div className='tms-section2'>
        <div className='tms-section2-content container'>
            <div className='tms-section2-flex'>
                <Fade left>
                <div className='tms-section2-left'>
                    <h1>What Is TMS?</h1>
                    <p>Transcranial magnetic stimulation (TMS) is one of the most effective procedures available for depression. It uses magnetic pulses to activate specific areas of your brain where low activity causes depression. TMS is an effective, safe, nonconvulsive, and noninvasive brain stimulation that has been in use since 1985 and has been approved by the Food and Drug Administration (FDA) since 2008.</p>
                    <br />
                    <p>What Is TMS?
                    Major depression is largely the result of dysregulation in the brain, particularly in the outer layer of the cerebrum. Located at the front of the skull, the cerebrum is split into two distinct hemispheres–the right and left. Depression is associated with reduced activity in the patient’s left dorsolateral prefrontal cortex (DLPFC) and often increased activity in their right DLPFC.</p>
                    <br />
                    <p>The defining principle behind all TMS treatment is that non-convulsive, non-invasive magnetic stimulation can be used to treat depression by enhancing and normalizing brain functioning. High- and low-frequency transcranial magnetic stimulation reverses the effects of under and over excitability.</p>
                </div>
                </Fade>

                <Fade right>
                <div className='tms-section2-right'>
                    <img src={section2} alt="banner" border="0" />
                </div>
                </Fade>

            </div>
        </div>

      </div>
    </>
  )
}

export default TMSSection2
