import React from 'react';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';

import imgHero from '../../../img/bainbridge/bainbridge_hero_600.jpg';

import './PageBainbridge.css';

export default function PageBainbridge() {

  return <>
    <div className="page page-project page-bainbridge">
      <h1>Bainbridge High School Water & Sewer Improvements</h1>
      <img
        className="hero"
        src={imgHero}
        alt=""
      />
      <h2>Overview</h2>
      <p>A state of the art 1500 students high school was built 5 miles outside the City Limits with no available utilities nearby to serve the school. York & Associates Engineering, Inc. was honored to be selected for the design of water and sanitary sewer extensions to serve the school and future growth in the annexed area.</p>
      <h2>Project Summary</h2>
      <ul>
        <li>400,000 gallons multi-column elevated water tower</li>
        <li>500 feet deep water well</li>
        <li>A well house with fluoride and chlorination equipment</li>
        <li>A mile of 12-inch diameter gravity sewer line</li>
        <li>A sewer pump station</li>
        <li>3 miles of 10-inch Forcemain along the U.S. Highway 84</li>
        <li>0.3 miles of 12-inch HDPE Directional bore within the highway right-of-way</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Surveying (boundary and topographic)</li>
        <li>Construction cost estimating</li>
        <li>Application for a permit to operate Public Water System</li>
        <li>Design services</li>
        <li>Construction plans</li>
        <li>Permitting services (GDOT, NPDES, EPD)</li>
        <li>Contract documents & technical specifications</li>
        <li>Bidding services</li>
        <li>Construction administration & monitoring</li>
      </ul>
      <div className="hr"/>
      <h3>See Also</h3>
      <ProjectLinks
          excludes={ [ projects.bainbridge ] }
        />
    </div>
  </>;
}
