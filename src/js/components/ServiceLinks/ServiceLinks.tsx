import React from 'react';
import { Link } from "react-router-dom";
import { routes } from '../../data/consts';

import Image from '../Image/Image';

import imgMunicipal from '../../../img/services/services_municipal_1.jpg';
import imgTransportation from '../../../img/services/services_trans_0.jpg';
import imgWaterResources from '../../../img/services/services_enviro_0.jpg';
import imgSiteDesign from '../../../img/services/services_dev_0.jpg';
import imgSurvey from '../../../img/services/services_surveying_0.jpg';

import './ServiceLinks.css';

export default function ServiceLinks() {

  return <section
    className="service-links"
  >
    <Link
      className={ `service-link` }
      to={ routes.servicesMuni }>
      <Image
        src={imgMunicipal}
        alt=""
      />
      <p>Municipal</p>
    </Link>

    <Link
      className={ `service-link` }
      to={ routes.servicesTrans }>
      <Image
        src={imgTransportation}
        alt=""
      />
      <p>Transportation</p>
    </Link>

    <Link
      className={ `service-link water` }
      to={ routes.servicesWater }>
      <Image
        src={imgWaterResources}
        alt=""
      />
      <p>Water Resources & Environmental Engineering</p>
    </Link>

    <Link
      className={ `service-link` }
      to={ routes.servicesSite }>
      <Image
        src={imgSiteDesign}
        alt=""
      />
      <p>Site Design & Land Development</p>
    </Link>

    <Link
      className={ `service-link` }
      to={ routes.servicesSurvey }>
      <Image
        src={imgSurvey}
        alt=""
      />
      <p>Surveying</p>
    </Link>

  </section>
}

