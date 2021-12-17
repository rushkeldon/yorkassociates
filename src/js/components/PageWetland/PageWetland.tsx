import React from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';

import './PageWetland.css';

import imgHero from '../../../img/wetland/wetland_hero.jpg';
import img0 from '../../../img/wetland/wetland_sprinkler.jpg';
import img1 from '../../../img/wetland/wetland_sprinkler_close.jpg';

import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';
import Image from '../Image/Image';

export default function PageWetland() {

  return <>
    <div className="page page-project page-bainbridge">
      <h1>Wetland Wastewater Treatment Facility Improvements</h1>
      <Image
        className="hero"
        src={ imgHero }
        alt=""
      />
      <h2>Overview</h2>
      <p>A constructed wetland wastewater treatment facility was originally built for Ochlocknee, a rural town of less than 1,000 population as a low operational cost and minimum maintenance solution. An expansion was needed to increase the permit capacity of the treatment from 15,000 gpd to 50,000 gpd as the number of sewer connections increased over the years.</p>
      <ImageGrid
        imgURLs={ [
          img0,
          img1
        ] }
      />
      <h2>Project Summary</h2>
      <ul>
        <li>Facultative stabilization pond</li>
        <li>Two wetland cells in series on a parallel system</li>
        <li>Common cattails and Sawgrass were planted to aid in transferring of oxygen to the root zone</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Application and Engineering Report for funding (GEFA & CDBG)</li>
        <li>EID (Environmental Information Document)</li>
        <li>DDR (Design Development Report)</li>
        <li>Surveying</li>
        <li>Permitting services</li>
        <li>Easements</li>
        <li>Design services</li>
        <li>Cost estimating</li>
        <li>Contract documents</li>
        <li>Bidding assistance</li>
        <li>Construction administration & monitoring</li>
      </ul>
      <div className="hr"/>
      <h3>See Also</h3>
      <ProjectLinks
        excludes={ [ projects.wetland ] }
      />
    </div>
  </>;
}
