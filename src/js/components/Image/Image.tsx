import React from 'react';

import './Image.css';

type props = {
  src : string,
  className? : string,
  alt? : string
}

export default function Image( {
  src = '',
  className = '',
  alt = ''
} : props ) {
  return <img
    className={ `image${ className ? ` ${ className }` : '' }` }
    src={ src }
    alt={ alt }
    onLoad={ e => {
      ( e.target as HTMLImageElement ).classList.add( 'loaded' );
    } }
  />
}
