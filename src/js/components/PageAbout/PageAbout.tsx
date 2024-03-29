import React from 'react';
import { Helmet } from "react-helmet";

import Image from '../Image/Image';

import imgOffice from '../../../img/office.jpg';

import './PageAbout.css';

export default function PageAbout() {

  return <>
    <Helmet>
      <title>About Us | York & Associates Engineering</title>
      <meta name="description" content="York & Associates Engineering has been providing engineering, surveying/mapping, and technical services to governmental authorities, municipalities, commercial, industrial, and private sectors since 2003." />
      <link rel="canonical" href="https://www.yorkassociates.net/about" />
    </Helmet>
    <div className="page page-about">
      <h1>About Us</h1>
      <Image
        src={ imgOffice }
        alt="York & Associates Engineering Inc Office"
      />
      <h2>We are committed to providing the best solutions.</h2>
      <p>York & Associates Engineering has been providing engineering, surveying/mapping, and technical services to governmental authorities, municipalities, commercial, industrial, and private sectors since 2003. We are committed to developing innovative, efficient and cost-effective solutions and always work in our clients’ best interests.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to partner with communities and clients in providing cost-effective, low-maintenance, and enduring solutions.</p>
      <h2>Our Core Values</h2>
      <p>Our core values are reflected in each and every action we take.</p>
      <h3>Passion</h3>
      <p>We are passionate about our work and enjoy solving problems indoors as much as outdoors. The quality of the design and finished product is a reflection of the time the engineer spends in the field. We embrace the outdoor construction environment and enjoy having muddy boots. We are passionate about delivering high-quality designs and providing our clients with practical and effective finished products that will enhance community well-being and quality of life.</p>
      <h3>Golden Rule</h3>
      <p>Our principle is to treat others as we want to be treated. We aspire to treat others and our clients with uncompromised integrity and respect through our practice of honesty, caring and trusting.</p>
      <h2>Our Certifications</h2>
      <p>York & Associates Engineering, Inc. is certified through the Small Business Administration for the following:</p>
      <ul>
        <li>SBA 8(a) BD</li>
        <li>SBA EDWOSB</li>
        <li>SBA HUBZone</li>
      </ul>
      <h2>Our Affiliations</h2>
      <ul>
        <li>American Society of Civil Engineers</li>
        <li>National Society of Professional Engineers</li>
        <li>American Water Works Association</li>
        <li>Society of American Military Engineers</li>
      </ul>
    </div>
  </>;
}
