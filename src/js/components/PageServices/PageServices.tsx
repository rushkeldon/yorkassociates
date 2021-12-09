import React from 'react';
import './PageServices.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageServices() {
  return (
    <div className="page page-services">
      <Header page={ routes.services }/>
      <h1>Our Services</h1>
    </div>
  );
}
