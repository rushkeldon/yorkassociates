import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import './Image.css';

type props = {
  src : string,
  className? : string,
  alt? : string,
  title? : string,
  isZoomable? : boolean
}

export default function Image( {
  src = '',
  className = '',
  alt = '',
  title = '',
  isZoomable = false
} : props ) {
  return isZoomable ? <Zoom>
      <img
        className={ `image${ className ? ` ${ className }` : '' }` }
        src={ src }
        alt={ alt }
        title={ title || alt }
        onLoad={ e => {
          ( e.target as HTMLImageElement ).classList.add( 'loaded' );
        } }
      />
    </Zoom> : <img
    className={ `image${ className ? ` ${ className }` : '' }` }
    src={ src }
    alt={ alt }
    title={ title || alt }
    onLoad={ e => {
      ( e.target as HTMLImageElement ).classList.add( 'loaded' );
    } }
  />
}
