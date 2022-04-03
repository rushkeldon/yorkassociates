import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { routes } from '../../data/consts';
import imgMasthead from '../../../img/masthead.png';

import './Header.css';

export default function Header() {

  const pathname = useLocation().pathname;

  return <header
      className="header"
    >
      <div className="nav">
        <Link
          className={ `nav-item${ pathname === routes.home ? ' active' : '' }` }
          to={routes.home}>Home
        </Link>
        <Link
          className={ `nav-item${ pathname === routes.ourwork ? ' active' : '' }` }
          to={routes.ourwork}>Our Work
        </Link>
        <Link
          className={ `nav-item${ pathname === routes.services ? ' active' : '' }` }
          to={routes.services}>Our Services
        </Link>
        <Link
          className={ `nav-item${ pathname === routes.about ? ' active' : '' }` }
          to={routes.about}>About Us
        </Link>
        <Link
          className={ `nav-item${ pathname === routes.bidding ? ' active' : '' }` }
          to={routes.bidding}>Bidding
        </Link>
        <Link
          className={ `nav-item${ pathname === routes.contact ? ' active' : '' }` }
          to={routes.contact}>Contact
        </Link>
      </div>
      <Link
        className={ `nav-item${ pathname === routes.home ? ' active' : '' }` }
        to={routes.home}>
        <img
          className="logo"
          src={imgMasthead}
          alt=""
        />
      </Link>

    </header>;
}
