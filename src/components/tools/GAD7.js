import React, { useEffect } from 'react';
import './GAD7.css'

const MDAppWidget = () => {
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
    <div className='gad7'>
      <div className='gad7-content'>


        <div className='gad7-header'>
          <h1>Generalized Anxiety Disorder (GAD 7)</h1>
          <h2>Assesses the severity of the most common seven anxious disorder symptoms.</h2>
          <p>The calculator below can help you discover more about the symptoms used and about how the GAD 7 score is interpreted.</p>
        </div>

      <div className='gad7-flex container'>

          <div className='gad7-left'>
              <div className='gad7-form'>
                <div id="mdapp-widget" app-id="149"></div>
              </div>
          </div>

          <div className='gad7-right'>

            <div className='gad7-right-header'>
              <h1>GAD 7 scoring interpretation</h1>
              <p>The result provided by the GAD 7 calculator is aimed at revealing whether an anxiety disorder is present and to what degree.<br/><br/>

              Each of the 7 questions can be rated from 0 to 3 on the scale introduced above. Therefore, the overall GAD 7 score ranges between 0 and 21, 0 meaning no anxiety and 21 meaning severe anxiety.<br/><br/>

              The following table introduces the scores along their interpretation and a recommendation:</p>
            </div>

            <table border="1">
              <tr>
                <th>GAD 7 score (points)</th>
                <th>Interpretation</th>
                <th>Recommendation</th>
              </tr>
              <tr>
                <td>0 - 4</td>
                <td>No or little anxiety</td>
                <td>Common symptoms should continue to be monitored if there are still suspicions. Follow up GAD 7 assessment in 2 weeks.</td>
              </tr>
              <tr>
                <td>5 - 9</td>
                <td>Mild anxiety disorder</td>
                <td>Patient monitoring needs to be initiated.</td>
              </tr>
              <tr>
                <td>10 - 14</td>
                <td>Moderate anxiety disorder</td>
                <td>The patient should be evaluated with other quantitative and qualitative measures of psychological/ psychiatric testing.</td>
              </tr>
              <tr>
                <td>15 - 21</td>
                <td>Severe anxiety disorder</td>
                <td>Treatment needs to be initiated if it hasn’t already.</td>
              </tr>
          </table>

          <div className='reminder'>
            <p><i>Please remember that this quiz is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</i></p>
          </div>

          </div>
      </div>

    </div>

  </div>

    </>
  );
};

export default MDAppWidget;

