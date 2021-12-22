import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

import './PageContact.css';

export default function PageContact() {
  return <>
    <div className="page page-contact">
      <h1>Contact Us</h1>
      <p>We look forward to helping you find solutions that meet your specific design goals and project needs. If you have any questions about services, capabilities, or projects, please contact us today!</p>

      <div className="location">
        <div className="left">
          <h2>Our Office</h2>
          <p>308 E. Water Street<br/>
            Bainbridge, Ga 39817<br/>
            Phone: 229.248.0141</p>
          <a href="mailto:info@yorkassociates.net">info@yorkassociates.net</a>
        </div>
        <div className="right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.291974148272!2d-84.57667384924711!3d30.90646198419946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ed18e562d95963%3A0xa8ea9e5e61bb37bf!2s308%20E%20Water%20St%2C%20Bainbridge%2C%20GA%2039817!5e0!3m2!1sen!2sus!4v1569095842318!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen={ true }
            loading="lazy"
          />
        </div>
      </div>
      <ContactForm/>
    </div>
  </>;
}
