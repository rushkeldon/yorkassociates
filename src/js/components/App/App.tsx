import React from 'react';
import { Routes, Route } from "react-router-dom";
import PageHome from '../PageHome/PageHome';
import PageOurWork from '../PageOurWork/PageOurWork';
import PageServices from '../PageServices/PageServices';
import PageAbout from '../PageAbout/PageAbout';
import PageBidding from '../PageBidding/PageBidding';
import PageContact from '../PageContact/PageContact';
import { routes } from '../../data/consts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageArlington from '../PageArlington/PageArlington';
import PageBainbridge from '../PageBainbridge/PageBainbridge';
import PageBillReynolds from '../PageBillReynolds/PageBillReynolds';
import PageEastDouglas from '../PageEastDouglas/PageEastDouglas';
import PageRiverWalk from '../PageRiverWalk/PageRiverWalk';
import PageWetland from '../PageWetland/PageWetland';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import './App.css';

export default function App() {
  return <>
    <Header/>
    <ScrollToTop />
    <Routes>
      <Route path={ routes.home } element={<PageHome />} />
      <Route path={ routes.ourwork } element={<PageOurWork />} />
      <Route path={ routes.services } element={<PageServices />} />
      <Route path={ routes.about } element={<PageAbout />} />
      <Route path={ routes.bidding } element={<PageBidding />} />
      <Route path={ routes.contact } element={<PageContact />} />
      <Route path={ routes.projectArlington } element={<PageArlington />} />
      <Route path={ routes.projectBainbridge } element={<PageBainbridge />} />
      <Route path={ routes.projectBillReynolds } element={<PageBillReynolds />} />
      <Route path={ routes.projectEastDouglas } element={<PageEastDouglas />} />
      <Route path={ routes.projectRiverWalk } element={<PageRiverWalk />} />
      <Route path={ routes.projectWetlandWasteWater } element={<PageWetland />} />
    </Routes>
    <Footer/>
  </>;
}
