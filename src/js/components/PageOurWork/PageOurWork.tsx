import React from 'react';
import { Helmet } from "react-helmet";

import './PageOurWork.css';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import { routes } from '../../data/consts';

export default function PageOurWork() {
  return <>
    <Helmet>
      <title>Our Work | York & Associates Engineering</title>
      <meta name="description" content="York & Associates Engineering has completed hundreds of projects in the Southeastern United States. Here are a few of our recent projects." />
      <link rel="canonical" href={`https://www.yorkassociates.net${routes.ourwork}`} />
    </Helmet>
    <div className="page page-our-work">
      <h1>Our Work</h1>
      <ProjectLinks/>
    </div>
  </>;
}
