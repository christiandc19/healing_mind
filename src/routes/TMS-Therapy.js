import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Tmstherapy from '../components/tms-therapy/TMS-Therapy'
import TMSTherapySection from '../components/tms-therapy/TMS-Therapy-Section'
import TMSSection2 from '../components/tms-therapy/TMS-Section2'
import Contact2 from '../components/contact/Contact2'
import TMSSection3 from '../components/tms-therapy/TMS-Section3'
import BrainSlider from '../components/brainSlider/BrainSlider'


const TMSTherapy = () => {
  return (
    <>
    <Navbar /> 
    <Tmstherapy />
    <BrainSlider />
    <TMSSection2 />
    <TMSTherapySection />
    <TMSSection3 />
    <Contact2 />
    <Footer />
     </>
  )
}

export default TMSTherapy