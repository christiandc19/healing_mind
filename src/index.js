import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'
import TMSTherapy from './routes/TMS-Therapy';
import Apollo from './routes/ApolloPage';
import NasalEsketamine from './routes/Nasal-Esketamine';
import FAQ from './routes/FAQ';
import Questionnaire from './routes/Questionnaire';
import Questionnaire2 from './routes/Questionnaire2';





ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/tms-therapy' element={<TMSTherapy />} />
      <Route exact path='/apollo' element={<Apollo />} />
      <Route exact path='/nasal-esketamine' element={<NasalEsketamine />} />

      <Route exact path='/faq' element={<FAQ />} />

      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
      <Route exact path='/mental-health-quizzes' element={<Questionnaire />} />
      <Route exact path='/patient-health-questionnaire' element={<Questionnaire2 />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

