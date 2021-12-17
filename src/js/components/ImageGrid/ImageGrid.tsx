import React from 'react';

import './ImageGrid.css';

type props = {
  imgURLs? : string[];
};

export default function ImageGrid( {
  imgURLs = []
} : props ) {

  return <div className="image-grid">
    { imgURLs.map( ( url, i ) => <div className={ i === imgURLs.length - 1 ? 'landscape' : '' }>
        <img
          src={ url }
          alt=""
        />
      </div> )
     }
    </div>
}
