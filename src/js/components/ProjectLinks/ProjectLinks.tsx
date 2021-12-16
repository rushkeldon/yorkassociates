import React from 'react';
import { Link } from "react-router-dom";
import { routes, projects } from '../../data/consts';

import imgBainbridge from '../../../img/thumb_bainbridge_hs.jpg';
import imgEastDouglas from '../../../img/thumb_east_douglas.jpg';
import imgRiverwalk from '../../../img/thumb_riverwalk_trail.jpg';
import imgBillReynolds from '../../../img/thumb_bill_reynolds.jpg';
import imgWetland from '../../../img/thumb_wetland_wastewater.jpg';
import imgArlington from '../../../img/thumb_arlington_demo.jpg';

import './ProjectLinks.css';

type props = {
  excludes? : string[]
}

export default function ProjectLinks( {
  excludes = []
} : props) {

  return <section
    className="project-links"
  >
    { !excludes.includes( projects.bainbridge ) && <Link
        className={ `project-link` }
        to={routes.projectBainbridge}>
        <img
          src={imgBainbridge}
          alt=""
        />
        <p>Bainbridge High School Water & Sewer Improvements</p>
      </Link>
    }

    { !excludes.includes( projects.eastdouglas ) && <Link
        className={ `project-link` }
        to={ routes.projectEastDouglas }>
        <img
          src={imgEastDouglas}
          alt=""
        />
        <p>East Douglas Sanitary Sewer</p>
      </Link>
    }

    { !excludes.includes( projects.riverwalk ) && <Link
        className={ `project-link` }
        to={ routes.projectRiverWalk }>
        <img
          src={imgRiverwalk}
          alt=""
        />
        <p>Riverwalk Trail</p>
      </Link>
    }

    { !excludes.includes( projects.billreynolds ) && <Link
        className={ `project-link` }
        to={ routes.projectBillReynolds }>
        <img
          src={imgBillReynolds}
          alt=""
        />
        <p>Bill Reynolds Sports Complex</p>
      </Link>
    }

    { !excludes.includes( projects.wetland ) && <Link
        className={ `project-link` }
        to={ routes.projectWetlandWasteWater }>
        <img
          src={imgWetland}
          alt=""
        />
        <p>Wetland Wastewater Treatment Facility Improvements</p>
      </Link>
    }

    { !excludes.includes( projects.arlington ) && <Link
        className={ `project-link` }
        to={ routes.projectArlington }>
        <img
          src={imgArlington}
          alt=""
        />
        <p>Arlington Demolition</p>
      </Link>
    }
  </section>
}

