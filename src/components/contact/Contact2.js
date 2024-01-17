import React, { useRef } from "react";

import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";



import './Contact2.css';
import emailjs from 'emailjs-com'
import Access from "../section2/Access";


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



                // Popup message after send button is clicked
                const feedbackEl = document.querySelector(".feedback");
                feedbackEl.setAttribute("class", "feedback");
                setTimeout(function() {
                feedbackEl.setAttribute("class", "feedback hidden");
                }, 3000);






        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

        
            <div className="contact-form2-bg">
              
            <div className="contactform2">
                <div className="contact2-header contact2-container">
                    <h1>DO YOU NEED URGENT HELP?</h1>
                    <p>Our Support team is available to asssist you.</p>
                </div>



              <div class="contact2-container">
                  <div class="contact-form-content container">

                      <div class="left-side">

                      <iframe width="100%" height="500" title="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17822%20Beach%20Blvd.%20%20Suite%20200%20%20Huntington%20Beach,%20CA%2092647+(Healing%20Mind%20TMS%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>

                      </div>
 

                      <div class="right-side">
                          <div class="topic-text">Send us a message</div> <br/>
                              <p className="topic-text-p">We'll keep your contact information strictly confidential.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                  <div class="input-box">
                                  <input type="text" name='name' placeholder='Your Name' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="email" name='email' placeholder='Your Email' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="tel" name='telephone' placeholder='Your Phone' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="text" name='subject' placeholder='Subject' required />
                                  </div>
                                  <div class="input-box message-box">
                                  <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>
                                  </div>

                                  <input className="contact-btn" type="submit" value="Submit" />

                                  <div className="textarea2 feedback hidden">
                                  <textarea name="message2" cols="50" rows="1" required>Message Sent to Healing Mind Clinic!</textarea>
                                  </div>

                                </form>
                          </div>
                      </div>
              </div>

                      <div className="contact-cards">

                          <div class="contact-card address details">
                            <div className="card-icon">
                              <h2><FiMapPin /></h2>
                            </div>
                            <h1>Address</h1>
                            <div class="text-one">17822 Beach Blvd. Suite 200</div>
                            <div class="text-two">Huntington Beach, CA 92647</div>
                          </div>

                          <div class="contact-card phone details">
                            <div className="card-icon">
                            <h2><FiPhone /></h2>
                            </div>
                            <h1>Phone/Fax</h1>
                            <div class="text-one"><a href="tel:3232825838"> +1  (323) 282-5838</a></div>
                          </div>

                          <div class="contact-card email details">
                            <div className="card-icon">
                            <h2><MdAlternateEmail /></h2>
                            </div>
                            <h1>Email</h1>
                            <div class="text-one">info@healingmind.biz</div>
                          </div>

                      </div>

                      




          </div>
        </div>

        <Access />
        </>
    )
}

export default ContactForm