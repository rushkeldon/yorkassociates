import React from 'react';

import './Footer.css';

export default function Footer(){
  return <div className="footer">
    <div className="tri">
      <h3>Company Data</h3>
      <div className="data">
        <p>DUNS Number: 148976314</p>
        <p>Core NAICS: 541330</p>
        <p>CAGE Code: 8EBK5</p>
      </div>
    </div>
    <div className="tri">
      <h3>Certifications</h3>
      <div className="data">
        <p>• SBA 8(a)</p>
        <p>• SBA EDWOSB</p>
        <p>• SBA HUBZone</p>
      </div>
    </div>
    <div className="tri">
      <h3>GDOT Qualifications</h3>
      <div className="data">
        <p>3.01, 3.13, 5.01, 5.02, 8.01, and 9.01</p>
      </div>
    </div>
    <div className="tri">
      <h3>Our Contact</h3>
      <div className="data">
        <p>308 E. Water Street, Bainbridge, Georgia 39817</p>
        <a href="tel:2292480141">229.248.0141</a>
        <p>Copyright © 2022 York & Associates Engineering, Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
}


