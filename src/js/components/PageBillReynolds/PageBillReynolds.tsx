import React from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { projects } from '../../data/consts';

import imgHero from '../../../img/billreynolds/billreynolds_hero.jpg';
import img0 from '../../../img/billreynolds/billreynolds_cast.jpg';
import img1 from '../../../img/billreynolds/billreynolds_red_earth.jpg';
import img2 from '../../../img/billreynolds/billreynolds_pole_building.jpg';
import img3 from '../../../img/billreynolds/billreynolds_playfield.jpg';
import img4 from '../../../img/billreynolds/billreynolds_between_fields.jpg';
import img5 from '../../../img/billreynolds/billreynolds_tennis_court.jpg';

import './PageBillReynolds.css';

export default function PageBillReynolds() {

  return <>
    <div className="page page-project page-bainbridge">
      <h1>Bill Reynolds Sports Complex</h1>
      <img
        className="hero"
        src={imgHero}
        alt=""
      />
      <h2>Overview</h2>
      <p>Bill Reynolds Sports Complex was invested in the community to enhance the citizen’s well-being, improve the local economy, conserve the natural environment, and strengthen the community.</p>
      <ImageGrid
        imgURLs={ [
          img0,
          img1,
          img2,
          img3,
          img4,
          img5
        ] }
      />
      <h2>Project Summary</h2>
      <ul>
        <li>4 baseball fields</li>
        <li>4 softball fields</li>
        <li>5 basketball courts</li>
        <li>2 soccer/football fields</li>
        <li>A batting cage practice facility</li>
        <li>A club house/concession building</li>
        <li>A 570-space parking lot</li>
        <li>14 tennis courts</li>
        <li>A 300-space tennis facility parking lot</li>
        <li>A two-story tennis club house</li>
        <li>Storage facility</li>
        <li>Accessories required for a complete tennis complex</li>
      </ul>
      <h2>Services Provided</h2>
      <ul>
        <li>Survey services</li>
        <li>Site layout & design services</li>
        <li>Grading plan with storm drainage design & utilities</li>
        <li>Permitting services</li>
        <li>Cost estimating</li>
        <li>Bidding assistance</li>
        <li>Construction staking</li>
        <li>Construction administration</li>
      </ul>
      <div className="hr"/>
      <h3>See Also</h3>
      <ProjectLinks
        excludes={ [ projects.billreynolds ] }
      />
    </div>
  </>;
}
