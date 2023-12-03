import React from 'react';
import Image from '../Image/Image';

import './ImageGrid.css';

type ImageInfo = {
  src: string;
  alt: string;
};

type props = {
  imgInfos? : ImageInfo[];
};

export default function ImageGrid( {
  imgInfos = []
} : props ) {

  return <div className="image-grid">
    { imgInfos.map( ( imgInfo, i ) => <div
      key={ i }
      className={ i === imgInfos.length - 1 ? 'landscape' : '' } >
        <Image
          src={ imgInfo.src }
          alt={ imgInfo.alt }
        />
      </div> )
     }
    </div>
}
