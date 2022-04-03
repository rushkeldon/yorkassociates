import { StrictMode } from 'react';
import { render }from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './js/components/App/App';
import { startScrollDataAttr } from './js/utils/utils';

import './css/main.css';

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root') );

startScrollDataAttr( document.getElementById( 'root' ) as HTMLElement );
