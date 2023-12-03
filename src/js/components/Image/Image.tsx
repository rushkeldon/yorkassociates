import React from 'react';

import './Image.css';

type props = {
  src : string,
  className? : string,
  alt? : string,
  title? : string
}

export default function Image( {
  src = '',
  className = '',
  alt = '',
  title = ''
} : props ) {
  return <img
    className={ `image${ className ? ` ${ className }` : '' }` }
    src={ src }
    alt={ alt }
    title={ title || alt }
    onLoad={ e => {
      ( e.target as HTMLImageElement ).classList.add( 'loaded' );
    } }
  />
}
