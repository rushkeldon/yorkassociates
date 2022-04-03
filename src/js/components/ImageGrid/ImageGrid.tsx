import React from 'react';
import Image from '../Image/Image';

import './ImageGrid.css';

type props = {
  imgURLs? : string[];
};

export default function ImageGrid( {
  imgURLs = []
} : props ) {

  return <div className="image-grid">
    { imgURLs.map( ( url, i ) => <div
      key={ i }
      className={ i === imgURLs.length - 1 ? 'landscape' : '' } >
        <Image
          src={ url }
          alt=""
        />
      </div> )
     }
    </div>
}
