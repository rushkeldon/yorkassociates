import React from 'react';
import './PageAbout.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageAbout() {
  return <>
    <Header page={ routes.about }/>
    <div className="page page-about">
      <h1>About Us</h1>
    </div>
  </>;
}
