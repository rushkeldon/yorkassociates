import React from 'react';
import { Helmet } from "react-helmet";

import './PageBidding.css';
import { baseURL, routes } from '../../data/consts';

export default function PageBidding() {
  return <>
    <Helmet>
      <title>Bidding | York & Associates Engineering</title>
      <meta name="description" content="York & Associates Engineering has bid on the following projects." />
      <link rel="canonical" href={`https://www.yorkassociates.net${routes.bidding}`} />
    </Helmet>
    <div className="page page-bidding">
      <h1>Bidding</h1>
      <div className="hr"/>
      <h2>Camilla Gymnasium</h2>
      <h3>Project Number</h3>
      <p>#2024-019</p>
      <h3>Bid Date</h3>
      <p>Wednesday July 14th at 2:00 PM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Construct a new Gymnasium of approximately 16,000 s.f. including site construction and utilities as needed for a completion of the Camilla Gymnasium.</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_ad_for_bids`}>Advertisement for Bids</a>
        </li>
                <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_plan_holders.pdf`}>Plan Holders List</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Damascus City Park and Infrastructure Rehabilitation</h2>
      <h3>Project Number</h3>
      <p>#2024-10</p>
      <h3>Bid Date</h3>
      <p>Wednesday July 9th at 3:00 PM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Road Construction, Parking, and Playground</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/damascus_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/damascus_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/damascus_addendum_1.pdf`}>Addendum 1</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Cemetery Roads Improvement Phase II</h2>
      <h3>Project Number</h3>
      <p>#2025-13</p>
      <h3>Bid Date</h3>
      <p>Wednesday, June 11, 2025</p>
      <h3>Work to Be Done</h3>
      <p>Road Construction</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_cemeteryrd2_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_cemeteryrd2_plan_holders.pdf`}>Plan Holders List</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Bainbridge CDBG Wheat Ave. Storm Drainage Improvements</h2>
      <h3>Project Number</h3>
      <p>#2022-06</p>
      <h3>Bid Date</h3>
      <p>Thursday, April 24, 2025</p>
      <h3>Work to Be Done</h3>
      <p>Storm Drainage/Street Improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_add_1.pdf`}>Addendum 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_add_2.pdf`}>Addendum 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_add_3.pdf`}>Addendum 3</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_wheat_bidresults.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Cemetery Roads- Phase I</h2>
      <h3>Project Number</h3>
      <p>#2023-22</p>
      <h3>Bid Date</h3>
      <p>Thursday, September 19, 2024</p>
      <h3>Work to Be Done</h3>
      <p>Roads Improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_cemeteryrd_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_cemeteryrd_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_cemeteryrd_bidresults.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Town of Ochlocknee Water Improvements</h2>
      <h3>Project Number</h3>
      <p>#2024-18</p>
      <h3>Bid Date</h3>
      <p> Wednesday September 4, 2024, 11:00 AM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Water improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_waterimprovement_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_waterimprovement_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_waterimprovement_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_waterimprovement_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Demolition of Boys and Girls Club</h2>
      <h3>Project Number</h3>
      <p>#2024-01</p>
      <h3>Bid Date</h3>
      <p>Friday, May 17, 2024, 11:00 AM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Demolition</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_boysgirlsclub_demo_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_boysgirlsclub_demo_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_boysgirlsclub_demo_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>

      <div className="hr"/>
      <h2>Wheat Ave. Phase III</h2>
      <h3>Project Number</h3>
      <p>#2022-06</p>
      <h3>Bid Date</h3>
      <p>Friday, December 15th, 2023, 11:00 AM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Storm drainage improvements CDBG#21p-x-043-2-6178</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_storm_ad_for_bid.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_storm_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/bainbridge_storm_bidresults.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Toombs Park Improvements</h2>
      <h3>Project Number</h3>
      <p>#2023-13</p>
      <h3>Bid Date</h3>
      <p>Friday, December 8th, 2023, 11:00 AM (ET)</p>
      <h3>Work to Be Done</h3>
      <p>Site, Utilities, Restrooms</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_toombs_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_toombs_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_toombs_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_toombs_bidresults.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Gymnasium Demolition</h2>
      <h3>Project Number</h3>
      <p>#2023-14</p>
      <h3>Bid Date</h3>
      <p>Friday, September 8th, 2023 11:00 AM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Demolition of building</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_addendum_3.pdf`}>Addendum No. 3</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_addendum_4.pdf`}>Addendum No. 4</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_gym_demo_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Northside Heights</h2>
      <h3>Project Number</h3>
      <p>#2022-16</p>
      <h3>Bid Date</h3>
      <p>Thursday, August 24th, 2023, 11:00 AM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Road and storm drainage improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_northside_heights_street_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_northside_heights_street_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_northside_heights_street_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_northside_heights_street_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>CDBG Water Improvements</h2>
      <h3>Project Number</h3>
      <p>#2022-05</p>
      <h3>Bid Date</h3>
      <p>Friday, January 27, 2023, 11:00 AM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Water improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_cdbg_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_cdbg_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_cdbg_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_cdbg_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_cdbg_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Storm Drainage Improvements – Thomas & Cochran Streets</h2>
      <h3>Project Number</h3>
      <p>#2022-015</p>
      <h3>Bid Date</h3>
      <p>Thursday, 12/01/2022, 11:00 AM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Storm drainage improvements</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_storm_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_storm_plan_holders.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_storm_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_storm_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/camilla_storm_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Water Treatment Building</h2>
      <h3>Project Number</h3>
      <p>#2022-09</p>
      <h3>Bid Date</h3>
      <p>Friday, 07/29/2022, 11:00 AM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Construction of water treatment building</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_treatment_bldg_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_treatment_bldg_plan_holders_list.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_treatment_bldg_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_treatment_bldg_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Water Storage Tank</h2>
      <h3>Project Number</h3>
      <p>#2022-08</p>
      <h3>Bid Date</h3>
      <p>Friday, 07/15/2022, 4:30 PM (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Construction of an elevated water storage tank</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_tank_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_tank_plan_holders_list.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_tank_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_tank_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_water_tank_bid_result.pdf`}>Bid Result</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Sewer Pump Station Generators - Clean Water State Revolving Fund - CW20002</h2>
      <h3>Project Number</h3>
      <p>#2021-12</p>
      <h3>Bid Date</h3>
      <p>February 10, 2022</p>
      <h3>Work to Be Done</h3>
      <p>Construction and installation of generators on concrete pads for existing Pump Stations with associated electrical controls, wiring, and other miscellaneous appurtenances as shown on the plans or specified in the contract documents</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_sewer_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_sewer_plan_holders_list.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_sewer_bid_result.pdf`}>Bid Results</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>Elevated Water Storage Tank and Water Treatment Building</h2>
      <h3>Project Number</h3>
      <p>#2020-09</p>
      <h3>Bid Date</h3>
      <p>December 15, 2021, 2:00 P.M. (E.T.)</p>
      <h3>Work to Be Done</h3>
      <p>Construction of an elevated water storage tank, water treatment building, and other miscellaneous appurtenances as shown on the plans or specified in the contract documents.</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_ad_for_bids.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_plan_holders_list.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/ochlocknee_bid_result.pdf`}>Bid Results</a>
        </li>
      </ul>
      <div className="hr"/>
      <h2>U.S. 84 Thomasville Road Water Extension Project</h2>
      <h3>Project Number</h3>
      <p>#2021-07</p>
      <h3>Bid Date</h3>
      <p>June 24, 2021</p>
      <h3>Work to Be Done</h3>
      <p>The project is a water main extension of approximately 19,000 linear feet in length of 8" to 16" diameter pipe, along U.S. Highway 84/S.R. 38. The project will include valves, fire hydrants, fittings, horizontal and directional borings, Jack and Bore, and associated measures for the water system improvements project.</p>
      <h3>Links</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_ad_for_bids_sec00030.pdf`}>Advertisement for Bids</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_plan_holders_list.pdf`}>Plan Holders List</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_1.pdf`}>Addendum No. 1</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_2.pdf`}>Addendum No. 2</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_3.pdf`}>Addendum No. 3</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_4.pdf`}>Addendum No. 4</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_addendum_5.pdf`}>Addendum No. 5</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`${baseURL}doc/city_of_bainbridge_bid_results.pdf`}>Bid Results</a>
        </li>
      </ul>
    </div>
  </>;
}
