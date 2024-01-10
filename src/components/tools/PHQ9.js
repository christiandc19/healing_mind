import React, { useEffect } from 'react';
import './PHQ9.css'

import { BsDot } from 'react-icons/bs';


const MDAppWidget2 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tools.mdapp.co/js/sdk.js';
    document.getElementById('mdapp-widget').appendChild(script);

    return () => {
      // document.getElementById('mdapp-widget').removeChild(script1);
    };
  }, []);

  return (
    <>
    <div className='phq9'>
      <div className='phq9-content'>


        <div className='phq9-header'>
          <h1>PHQ 9 Patient Health Questionnaire</h1>
          <h2>Evaluates the depressive symptoms a patient may experience to determine depression severity.</h2><br/>
          <p>The PHQ 9 belongs to a series of mental health questionnaires which evaluate patient symptoms in search for a mental disorder, in this case, depression. The tool consists of 9 items that relate to different depressive symptoms. The patient is asked whether they consider they experience those symptoms, and if so, to rate the frequency.</p>
        </div>

      <div className='phq9-flex container'>

          <div className='phq9-left'>
              <div className='phq9-form'>
              <div id="mdapp-widget" app-id="150"></div>
              </div>
          </div>

          <div className='phq9-right'>

            <div className='phq9-right-header'>

              <h1>PHQ 9 explained</h1><br/>
              <p>This self report diagnosis tool evaluates the severity of depressive symptoms based on criteria from the DSM-IV guidelines. The patient is asked to review the past two weeks in respect to experiencing the following:<br/><br/>
                
              <ul>
               <li><span><BsDot /></span>Losing interest in activities usually performed with pleasure.</li> 
               <li><span><BsDot /></span>Experiencing feelings of hopelessness, depression.</li> 
               <li><span><BsDot /></span>Lack of energy and feeling exhausted.</li> 
               <li><span><BsDot /></span>Eating disorders from lack or too much appetite.</li> 
               <li><span><BsDot /></span> Feelings of disappointment and lack of confidence.</li> 
               <li><span><BsDot /></span> Lack of concentration in simple actions.</li> 
               <li><span><BsDot /></span> Restlessness or extreme fatigue.</li> 
               <li><span><BsDot /></span> Self-harm or suicidal thoughts.</li> 
              </ul><br/>
              
              <p>Each of the nine items are rated on the following scale:</p><br/>
              
              <ul>
               <li><span><BsDot /></span> Not at all (0 points);</li> 
               <li><span><BsDot /></span> Several days (1 point);</li> 
               <li><span><BsDot /></span> More than half the days (2 points);</li> 
               <li><span><BsDot /></span> Nearly every day (3 points).</li> 
              </ul>
              </p><br/>

              <h1>Result interpretation</h1><br/>
              <p>The overall PHQ-9 result ranges between 0 and 27. Patients scoring closer to 0 are less likely to exhibit symptoms associated with depression, whilst patients scoring closer to 27 are experiencing severe depressive symptoms.<br/><br/>

              The table below introduces the 4 severity stages and clinical recommendations:</p>
            </div>

            <table border="1">
              <tr>
                <th>Score</th>
                <th>Severity</th>
                <th>Recommendation</th>
              </tr>
              <tr>
                <td>0 - 4</td>
                <td>No or little anxiety</td>
                <td>No specific recommendations</td>
              </tr>
              <tr>
                <td>5 - 9</td>
                <td>Mild anxiety disorder</td>
                <td>Monitoring symptoms</td>
              </tr>
              <tr>
                <td>10 - 19</td>
                <td>Moderate anxiety disorder</td>
                <td>Referring for treatment</td>
              </tr>
              <tr>
                <td>20 - 27</td>
                <td>Severe anxiety disorder</td>
                <td>Starting treatment and monitoring</td>
              </tr>
          </table>
          </div>
      </div>

    </div>





  </div>



    </>
  );
};

export default MDAppWidget2;

