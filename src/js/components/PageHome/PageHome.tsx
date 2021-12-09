import React from 'react';
import './PageHome.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageHome() {
  return <>
    <Header page={ routes.home }/>
    <div className="page page-home">
      <h1>Home</h1>
    </div>
  </>;
}
