import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Quiz2 from '../components/questionnaire/Quizzes2'
import Footer from '../components/footer/Footer'
import PHQ9 from '../components/tools/PHQ9';
import ContactForm from '../components/contact/Contact2';
import InsuranceSection from '../components/insurance/InsuranceSection';


const Questionnaire2 = () => {
    return (
        <>
            <Navbar/>
            <Quiz2 />
            <PHQ9 />
            <InsuranceSection />
            <ContactForm />
            <Footer />   
        </>
    )
}

export default Questionnaire2
