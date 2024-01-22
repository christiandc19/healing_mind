import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection2.css'
import InsuranceLogos from './InsuranceLogos'


import Tricare from '../../assets/tricare.png'
import Bluecross from '../../assets/bluecross.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'
import Magellan from '../../assets/magellan.png'
import Cigna from '../../assets/cigna.png'




const InsuranceSection2 = () => {
    return (
        <>
        <div className='InsuranceSection2'>
            <div className="InsuranceSection2-container container">
                <div>
                    <h1>INSURANCE</h1> <br />
                    <h2>WE WORK WITH MAJOR INSURANCE GROUPS</h2>
                    <p>TMS (Transcranial Magnetic Stimulation) therapy may be covered by insurance in certain cases. However, coverage varies depending on factors such as the specific insurance plan, the diagnosed condition being treated, and whether other treatments have been unsuccessful.</p>
                    <p>To determine if TMS therapy is covered by a specific insurance plan, it is recommended to contact the insurance provider directly. Insurance companies can provide information about their coverage policies, any pre-authorization requirements, and potential out-of-pocket costs for the individual seeking TMS therapy.</p>
                    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>

                <div className="InsuranceSection2-content ">

                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Bluecross}/>
                                </div>
                                </Fade>

                                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Optum}/>
                                </div>
                                </Fade>

                                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Anthem}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Tricare}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Magellan}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Cigna}/>
                                </div>
                                </Fade>

                </div>
            </div>

        


        </div>
        </>
    )
}

export default InsuranceSection2
