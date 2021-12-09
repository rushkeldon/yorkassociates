import React from 'react';
import './PageHome.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageHome() {
  return (
    <div className="page page-home">
      <Header page={ routes.home }/>
      <h1>Home</h1>
      <button>click me</button>
    </div>
  );
}
