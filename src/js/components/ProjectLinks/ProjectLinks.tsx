import React from 'react';
import { Link } from "react-router-dom";
import { routes } from '../../data/consts';

import './ProjectLinks.css';

export default function ProjectLinks() {

  return <section
    className="project-links"
  >
    <Link
      className={ `project-link` }
      to={routes.projectBainbridge}>
      <img
        src="img/thumb_bainbridge_hs.jpg"
        alt=""
      />
      <p>Bainbridge High School Water & Sewer Improvements</p>
    </Link>
    <Link
      className={ `project-link` }
      to={routes.projectEastDouglas}>
      <img
        src="img/thumb_east_douglas.jpg"
        alt=""
      />
      <p>East Douglas Sanitary Sewer</p>
    </Link>
    <Link
      className={ `project-link` }
      to={routes.projectRiverWalk}>
      <img
        src="img/thumb_riverwalk_trail.jpg"
        alt=""
      />
      <p>Riverwalk Trail</p>
    </Link>
    <Link
      className={ `project-link` }
      to={routes.projectBillReynolds}>
      <img
        src="img/thumb_bill_reynolds.jpg"
        alt=""
      />
      <p>Bill Reynolds Sports Complex</p>
    </Link>
    <Link
      className={ `project-link` }
      to={routes.projectBillReynolds}>
      <img
        src="img/thumb_wetland_wastewater.jpg"
        alt=""
      />
      <p>Wetland Wastewater Treatment Facility Improvements</p>
    </Link>
    <Link
      className={ `project-link` }
      to={routes.projectArlington}>
      <img
        src="img/thumb_arlington_demo.jpg"
        alt=""
      />
      <p>Arlington Demolition</p>
    </Link>
  </section>
}

