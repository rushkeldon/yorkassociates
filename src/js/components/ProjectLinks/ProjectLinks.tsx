import React from 'react';
import { Link } from "react-router-dom";
import { routes, projects } from '../../data/consts';

import Image from '../Image/Image';

import imgBainbridge from '../../../img/bainbridge/thumb_bainbridge_hs.jpg';
import imgEastDouglas from '../../../img/eastdouglas/thumb_east_douglas.jpg';
import imgRiverwalk from '../../../img/riverwalk/thumb_riverwalk_trail.jpg';
import imgBillReynolds from '../../../img/billreynolds/thumb_bill_reynolds.jpg';
import imgWetland from '../../../img/wetland/thumb_wetland_wastewater.jpg';
import imgArlington from '../../../img/arlington/thumb_arlington_demo.jpg';

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
        <Image
          src={imgBainbridge}
          alt=""
        />
        <p>Bainbridge High School Water & Sewer Improvements</p>
      </Link>
    }

    { !excludes.includes( projects.eastdouglas ) && <Link
        className={ `project-link` }
        to={ routes.projectEastDouglas }>
        <Image
          src={imgEastDouglas}
          alt=""
        />
        <p>East Douglas Sanitary Sewer</p>
      </Link>
    }

    { !excludes.includes( projects.riverwalk ) && <Link
        className={ `project-link` }
        to={ routes.projectRiverWalk }>
        <Image
          src={imgRiverwalk}
          alt=""
        />
        <p>Riverwalk Trail</p>
      </Link>
    }

    { !excludes.includes( projects.billreynolds ) && <Link
        className={ `project-link` }
        to={ routes.projectBillReynolds }>
        <Image
          src={imgBillReynolds}
          alt=""
        />
        <p>Bill Reynolds Sports Complex</p>
      </Link>
    }

    { !excludes.includes( projects.wetland ) && <Link
        className={ `project-link` }
        to={ routes.projectWetlandWasteWater }>
        <Image
          src={imgWetland}
          alt=""
        />
        <p>Wetland Wastewater Treatment Facility Improvements</p>
      </Link>
    }

    { !excludes.includes( projects.arlington ) && <Link
        className={ `project-link` }
        to={ routes.projectArlington }>
        <Image
          src={imgArlington}
          alt=""
        />
        <p>Arlington Demolition</p>
      </Link>
    }
  </section>
}

