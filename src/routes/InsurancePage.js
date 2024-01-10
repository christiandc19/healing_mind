import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
import InsuranceSection2 from '../components/insurance/InsuranceSection2';
import InsuranceSection3 from '../components/insurance/InsuranceSection3';
import Contact2 from '../components/contact/Contact2'




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />
           <InsuranceSection2 />
           <InsuranceSection3 />
           <Contact2 />
           <Footer />
        </>
    )
}

export default InsurancePage
