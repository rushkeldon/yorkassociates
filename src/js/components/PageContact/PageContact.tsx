import React from 'react';
import './PageContact.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageContact() {
  return <>
    <Header page={ routes.contact }/>
    <div className="page page-contact">
      <h1>Contact Us</h1>
    </div>
  </>;
}
