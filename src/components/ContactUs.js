import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';

export default function ContactUs ({resumeData}) {
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_j3io1ha', e.target, 'user_eCsw6Zt0O4mbWkiVYfJgk')
      .then((result) => {
        console.log(e.target)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions
              </p>
            </div>
          </div>
          <div className="row">
            
             <form id="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                <input type="hidden" name="contact_number" />
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="user_name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" name="user_email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" value="Send">Send</button>
            </form>

         </div>
        </section>
        );
  }