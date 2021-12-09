import React from 'react';
import { Link } from "react-router-dom";
import { routes } from '../../data/consts';

import './Header.css';

type props = {
  page: string;
};

export default function Header( {
  page = ""
} : props ) {
  return (
    <header
      className="header"
    >
      <div className="nav">
        <Link
          className={ `nav-item${ page === routes.home ? ' active' : '' }` }
          to="/">Home
        </Link>
        <Link
          className={ `nav-item${ page === routes.ourwork ? ' active' : '' }` }
          to="/ourwork">Our Work
        </Link>
        <Link
          className={ `nav-item${ page === routes.services ? ' active' : '' }` }
          to="/services">Our Services
        </Link>
        <Link
          className={ `nav-item${ page === routes.about ? ' active' : '' }` }
          to="/about">About Us
        </Link>
        <Link
          className={ `nav-item${ page === routes.bidding ? ' active' : '' }` }
          to="/bidding">Bidding
        </Link>
        <Link
          className={ `nav-item${ page === routes.contact ? ' active' : '' }` }
          to="/contact">Contact
        </Link>
      </div>
    </header>
  );
}
