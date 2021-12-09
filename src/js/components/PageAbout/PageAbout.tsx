import React from 'react';
import './PageAbout.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageAbout() {
  return (
    <div className="page page-about">
      <Header page={ routes.about }/>
      <h1>About Us</h1>
    </div>
  );
}
