import React from 'react';

import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';
import ImageGrid from '../ImageGrid/ImageGrid';

import imgHero from '../../../img/arlington/arlington_hero.jpg';
import img0 from '../../../img/arlington/arlington_falling_apart.jpg';
import img1 from '../../../img/arlington/arlington_doors.jpg';
import img2 from '../../../img/arlington/arlington_school.jpg';
import img3 from '../../../img/arlington/arlington_flyer.jpg';
import img4 from '../../../img/arlington/arlington_plaque.jpg';

import './PageArlington.css';
import Image from '../Image/Image';

export default function PageArlington() {

  return <>
    <div className="page page-bainbridge">
      <h1>Arlington Demolition</h1>
      <Image
        className="hero img"
        src={imgHero}
        alt=""
      />
      <h2>Overview</h2>
      <p>The City of Arlington, Georgia, a rural town of population of 1,300 had an abandoned dilapidated and structurally unsound school and gym buildings that were listed on the State of Georgia’s List of Historical structures. The school site was adjacent to an existing recreation area and was also surrounded by a residential neighborhood which posed health risks and hazards to the children.</p>
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
        <li>Find available funds to improve the town</li>
        <li>Demolish the buildings</li>
        <li>Provide a more appealing view with a Historic Walking Tour</li>
        <li>Improve the safety environment for the residents and children in the area</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Preliminary engineering report</li>
        <li>Cost estimating for the repairs/rehabilitation</li>
        <li>Cost estimating for the demolition</li>
        <li>Provided both costs for rehabilitation the buildings and a demolition cost</li>
        <li>Funding application assistance (CDBG)</li>
        <li>Surveying</li>
        <li>Compliance with the State Historical Preservation Division</li>
        <li>Develop & design an “Interpretative Display Sign” for the historical building</li>
        <li>Develop & design the “Walking Tour Brochure” to City Hall and other destination sites within the City for public use.</li>
        <li>Design services</li>
        <li>Contract documents</li>
        <li>Bidding assistance</li>
        <li>Construction administration & monitoring</li>
      </ul>
      <div className="hr"/>
      <h3>See Also</h3>
      <ProjectLinks
        excludes={ [ projects.arlington ] }
      />
    </div>
  </>;
}
