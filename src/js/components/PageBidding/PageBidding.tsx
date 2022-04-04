import React from 'react';

import './PageBidding.css';
import { baseURL } from '../../data/consts';

export default function PageBidding() {
  return <>
    <div className="page page-bidding">
      <h1>Bidding</h1>
      <div className="hr"/>
      <h2>Town of Ochlocknee</h2>
      <h3>Project Name</h3>
      <p>Sewer Pump Station Generators - Clean Water State Revolving Fund - CW20002</p>
      <h3>Project Number</h3>
      <p>#2021-12</p>
      <h3>Bid Date</h3>
      <p>February 10, 2022</p>
      <h3>Work to Be Done</h3>
      <p>Construction and installation of generators on concrete pads for existing Pump Stations with associated electrical controls, wiring, and other miscellaneous appurtenances as shown on the plans or specified in the contract documents</p>
      <h3>Links</h3>
      <ul>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_sewer_ad_for_bids.pdf`}>Advertisement for Bids</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_sewer_plan_holders_list.pdf`}>Plan Holders List</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_sewer_bid_result.pdf`}>Bid Results</a></li>
      </ul>
      <div className="hr"/>
      <h2>Town of Ochlocknee</h2>
      <h3>Project Name</h3>
      <p>Elevated Water Storage Tank and Water Treatment Building</p>
      <h3>Project Number</h3>
      <p>#2020-09</p>
      <h3>Bid Date</h3>
      <p>December 15, 2021, 2:00 P.M. (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Construction of an elevated water storage tank, water treatment building, and other miscellaneous appurtenances as shown on the plans or specified in the contract documents.</p>
      <h3>Links</h3>
      <ul>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_ad_for_bids.pdf`}>Advertisement for Bids</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_plan_holders_list.pdf`}>Plan Holders List</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_addendum_1.pdf`}>Addendum No. 1</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_addendum_2.pdf`}>Addendum No. 2</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/town_of_ochlocknee_bid_results.pdf`}>Bid Results</a></li>
      </ul>
      <div className="hr"/>
      <h2>City of Bainbridge</h2>
      <h3>Project Name</h3>
      <p>U.S. 84 Thomasville Road Water Extension Project</p>
      <h3>Project Number</h3>
      <p>#2021-07</p>
      <h3>Bid Date</h3>
      <p>June 24, 2021</p>
      <h3>Work to Be Done</h3>
      <p>The project is a water main extension of approximately 19,000 linear feet in length of 8" to 16" diameter pipe, along U.S. Highway 84/S.R. 38. The project will include valves, fire hydrants, fittings, horizontal and directional borings, Jack and Bore, and associated measures for the water system improvements project.</p>
      <h3>Links</h3>
      <ul>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_ad_for_bids_sec00030.pdf`}>Advertisement for Bids</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_plan_holders_list.pdf`}>Plan Holders List</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_1.pdf`}>Addendum No. 1</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_2.pdf`}>Addendum No. 2</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_3.pdf`}>Addendum No. 3</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_4.pdf`}>Addendum No. 4</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_5.pdf`}>Addendum No. 5</a></li>
        <li><a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_bid_results.pdf`}>Bid Results</a></li>
      </ul>
    </div>
  </>;
}
