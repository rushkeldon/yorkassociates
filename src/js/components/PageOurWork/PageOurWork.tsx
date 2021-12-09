import React from 'react';
import './PageOurWork.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageOurWork() {
  return <>
    <Header page={ routes.ourwork }/>
    <div className="page page-our-work">
      <h1>Our Work</h1>
    </div>
  </>;
}
