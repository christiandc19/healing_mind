import React from "react";
import ReactCompareImage from "react-compare-image";


import './BrainSliderSmall.css'



const before =
"https://kings-tms.s3.us-west-1.amazonaws.com/non-depressed.png";
const after =
"https://kings-tms.s3.us-west-1.amazonaws.com/depressed.png";

export default function App() {


  return (

<>
<div className="brainSliderSmall">
    <div className="brainSliderSmall-content container">

        <div className="brainSliderSmall-content-header">
        <h1>Understanding how your brain works</h1>
        <p>There are specific areas of the brain involved in mood regulation. We stimulate those areas with magnetic pulses.</p>
        </div>


<div className="brainSliderWrapper">
        <div className="bs-small">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>


            <div className="brainSliderSmall-content-bottom1-flex">
                <h1>Depressed</h1>
                <h1>Non-Depressed</h1>
            </div>



        <div className="brainSliderSmall-content-bottom2 container">
            <p>For those diagnosed with depression, specific areas of the brain are known to be underactive. Stimulating these areas can improve the brain’s ability to regulate mood.</p>
        </div>

    </div>
    </div>
    </>
  );
}
