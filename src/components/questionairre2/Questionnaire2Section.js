import React from 'react'
import Contact2 from '../contact/Contact2'

import './FaqSection.css'
import PHQ9 from '../tools/PHQ9'

const FaqSection = () => {
  return (
<>

    <div className='faqSection'>

      <div className='faqSection-content container'>



              <PHQ9 />


          </div>

      </div>


<div className='faq'>


        <div className="centerplease">
          <h1>Frequently Asked Questions</h1>  
        </div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question1" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question1" class="question">
  Is TMS like electroconvulsive therapy (ECT)?
  </label>
  <div class="answers">
    <p>Transcranial Magnetic Stimulation (TMS) and Electroconvulsive Therapy (ECT) are both treatments for depression, but they differ significantly in their approach, mechanism, and side effects:</p>
    <h5>1. Mechanism of Action:</h5>
    <ul>
      <li><b>TMS:</b> TMS uses magnetic fields to stimulate nerve cells in the brain. It involves the placement of an electromagnetic coil against the scalp, which generates a magnetic field that induces small electrical currents in the brain's targeted region. This stimulation aims to regulate neural activity in specific areas associated with mood regulation.</li>
      <li><b>ECT:</b> ECT, on the other hand, involves the administration of a controlled electric current directly to the brain, typically while the patient is under general anesthesia. This induces a brief seizure in the brain, which is believed to reset certain neurotransmitter imbalances.</li>
    </ul>

    <h5>2. Procedure:</h5>
    <ul>
      <li><b>TMS:</b> TMS is a non-invasive outpatient procedure. It does not require sedation or anesthesia. Patients remain awake and alert during the treatment, and there is no need for recovery time.</li>
      <li><b>ECT:</b> ECT is usually performed in a hospital setting. It requires anesthesia, and muscle relaxants are administered to prevent any potential physical effects of the induced seizure. Patients typically require some time to recover from the effects of anesthesia.</li>
    </ul>

    <h5>3. Side Effects:</h5>
    <ul>
      <li><b>TMS:</b> TMS is generally considered well-tolerated. Common side effects may include mild headache or scalp discomfort at the site of stimulation. These effects tend to be temporary and usually diminish over time.</li>
      <li><b>ECT:</b> ECT can have more pronounced side effects. These may include memory loss, confusion immediately after the treatment, and potential cognitive side effects that may persist for a period after treatment.</li>
    </ul>

    <h5>4. Treatment Course:</h5>
    <ul>
      <li><b>TMS:</b> TMS typically involves a series of sessions over several weeks. It is a gradual process, with improvements often observed over time.</li>
      <li><b>ECT:</b> ECT is usually administered in a course of treatments, which may be scheduled over a few weeks. Some individuals may require ongoing maintenance ECT.</li>
    </ul>

    <h5>5. Indications:</h5>
    <ul>
      <li><b>TMS:</b> ECT is generally reserved for severe cases of depression, especially those that have not responded to other forms of treatment. It is also sometimes used in cases of severe mania or certain types of schizophrenia.</li>
    </ul>

    <p>It's important to note that the decision between TMS and ECT should be made in consultation with a qualified mental health professional. They will consider the specific circumstances, severity of the condition, and individual preferences to determine the most appropriate treatment approach.</p>

  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question2" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question2" class="question">
  Am I a good candidate for TMS?
  </label>
  <div class="answers">
    <p>Determining whether you're a good candidate for Transcranial Magnetic Stimulation (TMS) depends on various factors. Here are some considerations:</p>

    <ul>

      <li><b>Diagnosis:</b> TMS is primarily used to treat major depressive disorder. If you have been diagnosed with this condition and have not responded well to other forms of treatment like medication or therapy, you may be a candidate.</li>

      <li><b>Treatment History:</b> If you have tried and not responded adequately to one or more antidepressant medications, or if you've experienced intolerable side effects from these medications, TMS may be a viable option.</li>

      <li><b>Medical History:</b> It's important for your healthcare provider to know your complete medical history, including any past or current medical conditions, medications, and previous mental health treatments.</li>

      <li><b>Absence of Certain Conditions:</b> Some medical or neurological conditions may make TMS less suitable or require special consideration. Conditions like epilepsy, certain types of seizures, or the presence of metal in or around the head could affect eligibility.</li>

      <li><b>Pregnancy:</b> If you are pregnant or planning to become pregnant, it's crucial to discuss this with your healthcare provider. TMS is generally considered safe during pregnancy, but this should be carefully evaluated on an individual basis.</li>

      <li><b>Expectations and Commitment:</b> TMS involves a series of sessions over several weeks. It's important to be committed to the treatment plan and attend all scheduled sessions for it to be effective.</li>

      <li><b>Other Therapies:</b> Your healthcare provider may consider whether you have tried other forms of treatment such as psychotherapy (talk therapy) and how effective these have been for you.</li>

      </ul>

      <p>Ultimately, the decision to undergo TMS should be made in consultation with a qualified mental health professional who can assess your specific circumstances and provide personalized advice based on their evaluation. They will be able to determine if TMS is a suitable treatment option for you.</p>

  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question3" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question3" class="question">
  What are TMS treatments like?
  </label>
  <div class="answers">
  TMS treatment involves brief outpatient procedures performed while the patient sits in a chair. On average, patients attend five 20 to 40-minute sessions per week for five to six weeks. You will be able to travel on your own to and from appointments and resume your usual activities immediately after each session as there is no negative effect on cognition or alertness. You will remain awake during these short, non-convulsive, non-invasive procedures.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question4" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question4" class="question">
  What are TMS treatments like?
  </label>
  <div class="answers">
  TMS treatment involves brief outpatient procedures performed while the patient sits in a chair. On average, patients attend five 20 to 40-minute sessions per week for five to six weeks. You will be able to travel on your own to and from appointments and resume your usual activities immediately after each session as there is no negative effect on cognition or alertness. You will remain awake during these short, non-convulsive, non-invasive procedures.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question5" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question5" class="question">
  Does TMS hurt?
  </label>
  <div class="answers">
  TMS treatments should not hurt, although some patients may have minor headaches or mild scalp discomfort, which typically subsides after the first few treatments.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question6" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question6" class="question">
  What are the risks and side effects of TMS?
  </label>
  <div class="answers">
  TMS is safe, nonconvulsive, and noninvasive brain stimulation. TMS does not require the use of anesthesia and is not intended to cause seizures. It is not systemic, meaning it does not circulate throughout the body like prescription drug therapy. <br/> <br/>
  TMS treatments should not hurt, although some patients may have minor headaches or initial scalp discomfort which typically subsides after the first few sessions. TMS does not cause memory loss. Your magnetic field exposure, which throughout the full course of the treatment is less than you would receive from an MRI, is minimal.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question7" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question7" class="question">
  Will TMS treatment be effective?
  </label>
  <div class="answers">
  TMS is one of the most effective procedures available for depression. TMS has been in use since 1985 and has been approved by the Food and Drug Administration (FDA) since 2008. Dr. Bruno has successfully treated hundreds of patients with TMS and achieved the following outcomes: <br/> <br/>
  <ul>
    <li>
    Over ¾ of patients have had a significant response (at least 50% improvement in severity of their symptoms of depression).
    </li>
    <li>
    Over 1/3 of patients have had a full remission (almost all symptoms of depression resolved).
    </li>
  </ul>
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question8" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question8" class="question">
  Why should I try TMS again if I’ve had a depressive relapse?
  </label>
  <div class="answers">
  Although most patients stay better long-term after a successful course of TMS, depression can be a recurrent condition. Some patients receive booster sessions  for recurrence of depression or may benefit from maintenance sessions to prevent depression from returning.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question9" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question9" class="question">
  How long do the benefits of TMS treatment last?
  </label>
  <div class="answers">
  The majority of patients are remitted of their symptoms of depression for over 12 months.
</div>
  </div>
</div>



<div className="faqContent">
  <div>
  <input type="checkbox" id="question10" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question10" class="question">
  Can I take antidepressant medication while receiving TMS?
  </label>
  <div class="answers">
  Yes. TMS therapy can be safely and effectively used with or without antidepressant medications.
  </div>
  </div>
</div>


</div>

<Contact2 />

    </>
  )
}

export default FaqSection
