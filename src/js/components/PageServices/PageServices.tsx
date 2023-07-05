import React, { useEffect } from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';

import imgDev0 from '../../../img/services/services_dev_0.jpg';
import imgDev1 from '../../../img/services/services_dev_1.jpg';
import imgDev2 from '../../../img/services/services_dev_2.jpg';
import imgEnviro0 from '../../../img/services/services_enviro_0.jpg';
import imgEnviro1 from '../../../img/services/services_enviro_1.jpg';
import imgEnviro2 from '../../../img/services/services_enviro_2.jpg';
import imgMuni0 from '../../../img/services/services_municipal_0.jpg';
import imgMuni1 from '../../../img/services/services_municipal_1.jpg';
import imgMuni2 from '../../../img/services/services_municipal_2.jpg';
import imgMuni3 from '../../../img/services/services_municipal_3.jpg';
import imgMuni4 from '../../../img/services/services_municipal_4.jpg';
import imgTrans0 from '../../../img/services/services_trans_0.jpg';
import imgTrans1 from '../../../img/services/services_trans_1.jpg';
import imgTrans2 from '../../../img/services/services_trans_2.jpg';
import imgSurveying0 from '../../../img/services/services_surveying_0.jpg';

import './PageServices.css';
import Image from '../Image/Image';
import { services } from '../../data/consts';

export default function PageServices() {

  useEffect( () => {
    window.setTimeout( () => {
      const anchorID = window.document.location.hash.substring( 1 )  || '';

      if( !anchorID ) return;
      const target : HTMLElement = window.document.getElementById( anchorID ) as HTMLElement;

      if( !target ) return;
      const buffer = 90;
      const rect : DOMRect = target.getBoundingClientRect();
      const root = window.document.getElementById( 'root' ) as HTMLDivElement;
      root.scrollTop += ( Math.ceil( rect.y ) - buffer );
    }, 250 );
  } );

  return <>
    <div className="page page-services">
      <h1>Our Services</h1>
      <p>For over 15 years, we've been partnering with communities and clients in providing cost-effective, low-maintenance, and enduring solutions.</p>
      <div className="hr"/>
      <h2 id={services.muni}>Municipal</h2>
      <p>We offer engineering solutions to our municipal clients that focus on practicality, cost-saving features, low-maintenance, and viable design. Our highly qualified team with years of
        experience enables us to provide our clients from initial project planning through design and completion of construction.
      </p>
      <ImageGrid
        imgURLs={ [
          imgMuni0,
          imgMuni1,
          imgMuni2,
          imgMuni3,
          imgMuni4
        ] }
      />
      <h3>Services</h3>
      <ul>
        <li>Planning & Layout</li>
        <li>Assistance with grant/funding applications for infrastructure projects</li>
        <li>Preliminary engineering reports and cost estimates</li>
        <li>Design services for new infrastructures</li>
        <li>Design services for rehabilitation of infrastructures</li>
        <li>Regulatory compliance and permitting (EPD, DOT, NRCS, CSXT, USCG, & USCE)</li>
        <li>Project Management</li>
        <li>Bidding & Construction Administration</li>
        <li>Construction Management</li>
      </ul>
      <div className="hr"/>
      <h2 id={services.trans}>Transportation</h2>
      <p>We provide full support from concept to completion.</p>
      <ImageGrid
        imgURLs={ [
          imgTrans0,
          imgTrans1,
          imgTrans2
        ] }
      />
      <h3>Services</h3>
      <ul>
        <li>City street improvements</li>
        <li>Rural roadway improvements</li>
        <li>Industrial park roadways</li>
        <li>Turning lanes, acceleration/deceleration lanes</li>
        <li>DOT driveway access design and permit</li>
        <li>Parking lots</li>
        <li>Sidewalks and pedestrian crosswalks</li>
        <li>Transportation enhancement projects</li>
        <li>Streetscapes</li>
        <li>Trails & pedestrian bridges</li>
      </ul>
      <div className="hr"/>
      <h2 id={services.water}>Water Resources & Environmental Engineering</h2>
      <p>We are committed to providing cost-effective solutions that allow our clients to improve and revitalize the infrastructure and environment as well as to protect public health and well-being.
      </p>
      <ImageGrid
        imgURLs={ [
          imgEnviro0,
          imgEnviro1,
          imgEnviro2
        ] }
      />
      <h3>Water Pipelines, Supply, Treatment & Storage Services</h3>
      <ul>
        <li>Water Distribution system design</li>
        <li>Water Wells (groundwater)</li>
        <li>Elevated Storage water tank</li>
        <li>Chemical treatment for water wells</li>
        <li>Water well facility rehabilitation</li>
      </ul>
      <h3>Wastewater & Sewer System Services</h3>
      <ul>
        <li>Sewer system design</li>
        <li>Sewage Pump Station</li>
        <li>Sewer Rehabilitation</li>
        <li>Inflow/Infiltration stud</li>
      </ul>
      <h3>Stormwater Drainage, Planning & Design Services</h3>
      <ul>
        <li>Stormwater management studies</li>
        <li>Hydrology studies</li>
        <li>Storm Drainage system designs</li>
        <li>Storm sewer system design</li>
        <li>NPDES Construction & Industrial Permitting</li>
        <li>Erosion & Sediment Control</li>
      </ul>
      <h3>Solid Waste Landfill Services</h3>
      <ul>
        <li>Closure & Post Closure Plans</li>
        <li>Methane & Groundwater Monitoring Plan</li>
        <li>Transfer Stations</li>
        <li>Construction/Demolition, Inert & Municipal</li>
        <li>Remaining Capacity</li>
        <li>Surface Mining</li>
      </ul>
      <div className="hr"/>
      <h2 id={services.site}>Site Design & Land Development</h2>
      <p>With decades of experience in site design & land development, we offer great insight into the design details that can make a significant difference in construction cost and durability.</p>
      <ImageGrid
        imgURLs={ [
          imgDev0,
          imgDev1,
          imgDev2
        ] }
      />
      <h3>Services</h3>
      <ul>
        <li>Site Planning & Design</li>
        <li>Commercial & Industrial Sites</li>
        <li>Hospitals & Institutions</li>
        <li>Residential Subdivision</li>
        <li>Parks & Recreation Facilities</li>
        <li>Sports Complexes⁠ - Baseball, Basketball, Cross-Country, Football, Soccer, Tennis & Track & Field</li>
        <li>Boat Ramps & Docks</li>
        <li>Marinas</li>
        <li>Erosion & Sedimentation Control Plans</li>
      </ul>
      <div className="hr"/>
      <Image
        src={ imgSurveying0 }
        alt=""
      />
      <h2 id={services.survey}>Surveying</h2>
      <p>To support our designs and surveys, we are equipped with the state-of-the-art surveying equipment including the 3 seconds angular accuracy Robotic Total Station,  and make use of today’s most advanced GPS with centimeter-level accuracy positioning Global Navigation Satellite System (GNSS) Real Time Kinematic(RTK) receiver to collect information about the physical world.</p>
      <h3>Types Of Survey Services</h3>
      <ul>
        <li>Boundary - ALTA/ACSM, Division and Retracement</li>
        <li>Mapping</li>
        <li>Topographic</li>
      </ul>
    </div>
  </>;
}
