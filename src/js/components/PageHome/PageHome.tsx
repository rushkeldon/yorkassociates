import React from 'react';
import './PageHome.css';
import SlideShow from '../SlideShow/SlideShow';
import ProjectLinks from '../ProjectLinks/ProjectLinks';

import img0 from '../../../img/slideshow/aerial.png';
import img1 from '../../../img/slideshow/cutting_metal.png';
import img2 from '../../../img/slideshow/doe_run.png';
import img3 from '../../../img/slideshow/ped_bridge.png';

export default function PageHome() {
  return <>
    <div className="page page-home">
      <SlideShow
        h1="We are a civil engineering consulting firm"
        p="committed to providing our clients with the best solution to meet their needs cost-effectively and efficiently. Our team has over 30 years of experience, and we are licensed to work in Georgia, Florida, and Alabama."
        imgURLs={ [
          img0,
          img1,
          img2,
          img3
        ]}
      />
      <ProjectLinks/>
    </div>
  </>;
}
