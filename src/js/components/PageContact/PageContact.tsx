import React from 'react';
import './PageContact.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageContact() {
  return (
    <div className="page page-contact">
      <Header page={ routes.contact }/>
      <h1>Contact Us</h1>
    </div>
  );
}
