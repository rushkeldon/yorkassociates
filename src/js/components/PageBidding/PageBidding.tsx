import React from 'react';
import './PageBidding.css';
import Header from '../Header/Header';
import { routes } from '../../data/consts';

export default function PageBidding() {
  return (
    <div className="page page-bidding">
      <Header page={ routes.bidding }/>
      <h1>Bidding</h1>
    </div>
  );
}
