import React from 'react';

import './Footer.css';

export default function Footer(){
  return <div className="footer">
    <div className="tri">
      <strong>COMPANY DATA</strong>
      <div className="data">
        <p>DUNS Number: 148976314</p>
        <p>Core NAICS: 541330</p>
        <p>CAGE Code: 8EBK5</p>
      </div>
    </div>
    <div className="tri">
      <strong>CERTIFICATIONS</strong>
      <div className="data">
        <p>• SBA 8(a)</p>
        <p>• SBA EDWOSB</p>
        <p>• SBA HUBZone</p>
      </div>
    </div>
    <div className="tri">
      <strong>GDOT QUALIFICATIONS</strong>
      <div className="data">
        <p>3.01, 3.13, 5.01, 5.02, 8.01, and 9.01</p>
      </div>
    </div>
   <p className="copyright">© 2021. York & Associates Engineering, Inc. 308 E. Water Street, Bainbridge, Georgia 39817</p>
  </div>
}


