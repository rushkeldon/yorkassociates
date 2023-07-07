import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../data/consts';
import imgMasthead from '../../../img/masthead.png';

import './Header.css';
import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';

export default function Header() {

  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState( false );
  const navigate = useNavigate();

  return <header
      className="header"
    >
      <Link
        className={ `nav-item${ pathname === routes.home ? ' active' : '' }` }
        to={routes.home}>
        <img
          className="logo"
          src={imgMasthead}
          alt=""
        />
      </Link>
      <HamburgerBtn
        onOpen={ () => setIsOpen( true ) }
        onClose={ () => setIsOpen( false ) }
      />
      <div className={ `nav${ isOpen ? ' open' : '' }` }>
        <Link
          onMouseDown={ () => navigate( routes.home ) }
          className={ `nav-item${ pathname === routes.home ? ' active' : '' }` }
          to={routes.home}>Home
        </Link>
        <Link
          onMouseDown={ () => navigate( routes.ourwork ) }
          className={ `nav-item${ pathname === routes.ourwork ? ' active' : '' }` }
          to={routes.ourwork}>Our Work
        </Link>
        <Link
          onMouseDown={ () => navigate( routes.services ) }
          className={ `nav-item${ pathname === routes.services ? ' active' : '' }` }
          to={routes.services}>Our Services
        </Link>
        <Link
          onMouseDown={ () => navigate( routes.about ) }
          className={ `nav-item${ pathname === routes.about ? ' active' : '' }` }
          to={routes.about}>About Us
        </Link>
        <Link
          onMouseDown={ () => navigate( routes.bidding ) }
          className={ `nav-item${ pathname === routes.bidding ? ' active' : '' }` }
          to={routes.bidding}>Bidding
        </Link>
        <Link
          onMouseDown={ () => navigate( routes.contact ) }
          className={ `nav-item${ pathname === routes.contact ? ' active' : '' }` }
          to={routes.contact}>Contact
        </Link>
      </div>
    </header>;
}
