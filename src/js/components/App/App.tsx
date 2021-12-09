import React from 'react';
import { Routes, Route } from "react-router-dom";
import PageHome from '../PageHome/PageHome';
import PageOurWork from '../PageOurWork/PageOurWork';
import PageServices from '../PageServices/PageServices';
import PageAbout from '../PageAbout/PageAbout';
import PageBidding from '../PageBidding/PageBidding';
import PageContact from '../PageContact/PageContact';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/ourwork" element={<PageOurWork />} />
        <Route path="/services" element={<PageServices />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/bidding" element={<PageBidding />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </div>
  );
}
