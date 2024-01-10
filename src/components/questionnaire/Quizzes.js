import React from "react";
import Fade from 'react-reveal/Fade';
import quiz from '../../assets/quiz.webp'


import './Quizzes.css'



const Quizzes = () => {

    return (
      <>

<div className="quizzes">

<div className="quizzes-content container">  
        <Fade left>
        <div className="quizzes-content-left">
            <div className="quizzes-header">
        <h1>Take our Mental Health Quiz</h1>
        </div>

        <p>This quiz is designed to provide you with some insight into the symptoms and characteristics of GAD. It is important to note that this quiz is not a diagnostic tool, and any concerns you have about your mental health should be discussed with a qualified healthcare professional.</p>

    </div>
    </Fade>

    <Fade right>
    <div className="quizzes-content-right">
        <img src={quiz} alt="Therapist" border="0" />

    </div>
    </Fade>

</div>


</div>




      </>
    )
}

export default Quizzes