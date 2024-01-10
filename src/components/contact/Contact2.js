import React, { useRef } from "react";
import Pin from "../../assets/pin.png";
import Call from "../../assets/Call.png";
import Email from "../../assets/email.png";



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

                      <iframe width="100%" height="500" title="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7454%20Melrose%20Ave.,%20Los%20Angeles%20CA%2090046+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>

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
                                  <textarea name="message2" cols="50" rows="1" required>Message Sent to Kings TMS Clinic!</textarea>
                                  </div>

                                </form>
                          </div>
                      </div>
              </div>

                      <div className="contact-cards">

                          <div class="contact-card address details">
                            <div className="card-icon">
                              <img src={Pin} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Address</h1>
                            <div class="text-one">7454 Melrose Ave., </div>
                            <div class="text-two">Los Angeles CA 90046</div>
                          </div>

                          <div class="contact-card phone details">
                            <div className="card-icon">
                              <img src={Call} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Phone</h1>
                            <div class="text-one"><a href="tel:3233196219"> +1  (323) 319-6219</a></div>
                          </div>

                          <div class="contact-card email details">
                            <div className="card-icon">
                              <img src={Email} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Email</h1>
                            <div class="text-one">info@kingstms.com</div>
                          </div>

                      </div>

                      




          </div>
        </div>

        <Access />
        </>
    )
}

export default ContactForm