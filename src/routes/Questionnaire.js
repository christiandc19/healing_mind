import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Quiz from '../components/questionnaire/Quizzes'
import Footer from '../components/footer/Footer'
import GAD7 from '../components/tools/GAD7';
import ContactForm from '../components/contact/Contact2';
import InsuranceSection from '../components/insurance/InsuranceSection';


const Questionnaire = () => {
    return (
        <>
            <Navbar/>
            <Quiz />
            <GAD7 />
            <InsuranceSection />
            <ContactForm />
            <Footer />   
        </>
    )
}

export default Questionnaire
