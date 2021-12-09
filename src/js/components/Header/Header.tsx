import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Link
          className={ `nav-item` }
          to="/">Home
        </Link>
        <Link
          className={ `nav-item` }
          to="/ourwork">Our Work
        </Link>
        <Link
          className={ `nav-item` }
          to="/services">Our Services
        </Link>
        <Link
          className={ `nav-item` }
          to="/about">About Us
        </Link>
        <Link
          className={ `nav-item` }
          to="/bidding">Bidding
        </Link>
        <Link
          className={ `nav-item` }
          to="/contact">Contact
        </Link>
      </div>
      <img
        className="logo"
        src="img/masthead.png"
        alt=""
      />
    </header>
  );
}

function isOnPage( path : string ) : boolean {
  return true;
}
