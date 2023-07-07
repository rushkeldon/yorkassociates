import React from 'react';
import imgHero from '../../../img/riverwalk/riverwalk_hero.jpg';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';
import ImageGrid from '../ImageGrid/ImageGrid';
import img0 from '../../../img/riverwalk/riverwalk_cement.jpg';
import img1 from '../../../img/riverwalk/riverwalk_form.jpg';
import img2 from '../../../img/riverwalk/riverwalk_planking.jpg';
import img3 from '../../../img/riverwalk/riverwalk_crane.jpg';
import img4 from '../../../img/riverwalk/riverwalk_bridge.jpg';
import Image from '../Image/Image';

import './PageRiverWalk.css';

export default function PageRiverWalk() {

  return <>
    <div className="page page-river-walk">
      <h1>Riverwalk Trail</h1>
      <Image
        className="hero img"
        src={ imgHero }
        alt=""
      />
      <h2>Overview</h2>
      <p>The City of Bainbridge is an outdoor oriented community that prides itself on parks, recreation, and natural resources. The community has 5 miles of beautiful shaded riverbanks. Along the east bank of the Flint River is the Cheney-Griffin Park and the Earle May Boat Basin Park. The Earle May Boat Basin Park has 2.5 miles of paved walking trails while the Cheney-Griffin Park had no walking trails. To enhance the park, a Riverwalk Trail was proposed along the river to connect the parks.</p>
      <ImageGrid
        imgURLs={ [
          img0,
          img1,
          img2,
          img3,
          img4
        ] }
      />
      <h2>Project Summary</h2>
      <ul>
        <li>1.5 miles long gravel walking trail along the Flint River</li>
        <li>8 feet wide x 120 feet long pedestrian bridge</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Application for Recreation Trail grant to GDNR</li>
        <li>Environmental assessment report to US Army Corps of Engineers</li>
        <li>Permitting services - US Corps of Engineers, State Historic Preservation, U.S. Fish & Wildlife, U.S. Coast Guard, GDOT, NDPES and EPD</li>
        <li>Surveying</li>
        <li>Easements — CSXT and DOT</li>
        <li>Design services</li>
        <li>Cost estimating</li>
        <li>Contract documents</li>
        <li>Construction surveying & monitoring</li>
        <li>Construction administration</li>
      </ul>
      <div className="hr"/>
      <h3 className="project-links-title">See Also</h3>
      <ProjectLinks
        excludes={ [ projects.riverwalk ] }
      />
    </div>
  </>;
}
