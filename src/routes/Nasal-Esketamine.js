import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import NasalEsketamine from '../components/nasal-esketamine/NasalEsketamine'
import MHIopSection from '../components/nasal-esketamine/NasalEsketamineSection'


const Iop = () => {
  return (
    <>
    <Navbar /> 
    <NasalEsketamine />
    <MHIopSection />
    <Footer />
     </>
  )
}

export default Iop