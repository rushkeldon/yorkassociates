import React from 'react';
import './PageEastDouglas.css';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';

import imgHero from '../../../img/eastdouglas/project_hero_east_douglas.jpg';
import img0 from '../../../img/eastdouglas/project_shot_east_douglas_0.jpg';
import img1 from '../../../img/eastdouglas/project_shot_east_douglas_1.jpg';
import img2 from '../../../img/eastdouglas/project_shot_east_douglas_2.jpg';
import img3 from '../../../img/eastdouglas/project_shot_east_douglas_3.jpg';
import img4 from '../../../img/eastdouglas/project_shot_east_douglas_4.jpg';
import ImageGrid from '../ImageGrid/ImageGrid';
import Image from '../Image/Image';

export default function PageEastDouglas() {
  return <>
    <div className="page page-bainbridge">
      <h1>East Douglas Sanitary Sewer</h1>
      <Image
        className="hero"
        src={ imgHero }
        alt=""
      />
      <h2>Overview</h2>
      <p>The local rural city of 13,000 population implemented this infrastructure improvements project to serve nearly 400 homes in 7 established neighborhoods. This planned infrastructure improvement project not only benefited the local economy, it also benefited the environment by eliminating of individual septic tanks usage, thereby cutting the amount of wastewater and pollutants discharging directly into the environment.</p>
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
        <li>7.5 miles of 8-inch diameter gravity sanitary sewer line </li>
        <li>7 pump stations in an established part of the City</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Preliminary engineering report</li>
        <li>GEFA funding application</li>
        <li>Surveying (topographic and boundary)</li>
        <li>Land acquisitions for pump stations</li>
        <li>Georgia Power easements</li>
        <li>Design services</li>
        <li>Cost estimating</li>
        <li>Construction plans</li>
        <li>Permitting services (DOT, NPDES, EPD)</li>
        <li>Contract documents & technical specifications</li>
        <li>Bidding assistance</li>
        <li>Construction administration & monitoring</li>
      </ul>
      <div className="hr"/>
      <h3>See Also</h3>
      <ProjectLinks
        excludes={ [ projects.eastdouglas ] }
      />
    </div>
  </>;
}
