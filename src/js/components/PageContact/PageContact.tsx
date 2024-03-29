import React from 'react';
import { Helmet } from "react-helmet";

import imgOffice from '../../../img/office.jpg';
import Image from '../Image/Image';

import './PageContact.css';
import { routes } from '../../data/consts';

export default function PageContact() {
  return <>
    <Helmet>
      <title>Contact Us | York & Associates Engineering</title>
      <meta name="description" content="We look forward to helping you find solutions that meet your specific design goals and project needs."/>
      <link rel="canonical" href={`https://www.yorkassociates.net${routes.contact}`}/>
    </Helmet>
    <div className="page page-contact">
    <h1>Contact Us</h1>
    <p>We look forward to helping you find solutions that meet your specific design goals and project needs.</p>
      <p>If you have any questions about services, capabilities, or projects, please contact us today!</p>
      <div className="location">
        <div className="meta">
          <h2>Our Office</h2>
          <Image
            src={imgOffice}
            alt="York & Associates Engineering Inc Office"
          />
          <p>308 E. Water Street<br/>
            Bainbridge, Ga 39817<br/>
          </p>
          <a href="tel:2292480141">229-248-0141</a>
          <a href="mailto:info@yorkassociates.net">info@yorkassociates.net</a>
        </div>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.291974148272!2d-84.57667384924711!3d30.90646198419946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ed18e562d95963%3A0xa8ea9e5e61bb37bf!2s308%20E%20Water%20St%2C%20Bainbridge%2C%20GA%2039817!5e0!3m2!1sen!2sus!4v1569095842318!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen={ true }
            loading="lazy"
            onLoad={ e => ( e?.target as HTMLIFrameElement )?.classList?.add( 'loaded' ) }
          />
        </div>
      </div>
    </div>
  </>;
}
