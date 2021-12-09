import React from 'react';
import { Routes, Route } from "react-router-dom";
import PageHome from '../PageHome/PageHome';
import PageOurWork from '../PageOurWork/PageOurWork';
import PageServices from '../PageServices/PageServices';
import PageAbout from '../PageAbout/PageAbout';
import PageBidding from '../PageBidding/PageBidding';
import PageContact from '../PageContact/PageContact';
import { routes } from '../../data/consts';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={ `/` } element={<PageHome />} />
        <Route path={ `/${ routes.ourwork }` } element={<PageOurWork />} />
        <Route path={ `/${ routes.services }` } element={<PageServices />} />
        <Route path={ `/${ routes.about }` } element={<PageAbout />} />
        <Route path={ `/${ routes.bidding }` } element={<PageBidding />} />
        <Route path={ `/${ routes.contact }` } element={<PageContact />} />
      </Routes>
    </div>
  );
}
