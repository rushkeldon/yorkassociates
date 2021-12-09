import React, { useEffect } from 'react';
import './PageServices.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';
import { startScrollDataAttr } from '../../utils/utils';

export default function PageServices() {
  return <>
    <Header page={ routes.services }/>
    <div className="page page-services">
      <h1>Our Services</h1>
    </div>;
  </>
}
