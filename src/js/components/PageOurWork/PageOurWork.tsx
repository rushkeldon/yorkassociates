import React from 'react';
import './PageOurWork.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageOurWork() {
  return (
    <div className="page page-our-work">
      <Header page={ routes.ourwork }/>
      <h1>Our Work</h1>
    </div>
  );
}
