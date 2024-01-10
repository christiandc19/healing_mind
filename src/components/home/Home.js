import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Contact2 from '../contact/Contact2';
import MissionHome from '../mission/MissionHome';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import BrainSliderSmall from '../brainSlider/BrainSliderSmall';
import Section2B from '../section2/Section2B';
// import Access from '../section2/Access';


const home = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    <Section2B />
    <InsuranceSection />
    <MissionHome />
    <BrainSliderSmall />
    <Contact2 />
    {/* <Access /> */}
    </>
  )
}

export default home
