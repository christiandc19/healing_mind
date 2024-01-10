import React from "react";
import Fade from 'react-reveal/Fade';

import quiz2 from '../../assets/quiz2.webp'


import './Quizzes.css'



const Quizzes2 = () => {

    return (
      <>

<div className="quizzes">

<div className="quizzes-content container">  
        <Fade left>
        <div className="quizzes-content-left">
            <div className="quizzes-header">
        <h1>Patient Health Questionnaire (PHQ) </h1>
        </div>

        <p>This questionnaire is a valuable tool that helps us understand and assess various aspects of your health. Your input is crucial in providing you with the best possible care.</p>

    </div>
    </Fade>

    <Fade right>
    <div className="quizzes-content-right">
        <img src={quiz2} alt="Therapist" border="0" />

    </div>
    </Fade>

</div>


</div>




      </>
    )
}

export default Quizzes2