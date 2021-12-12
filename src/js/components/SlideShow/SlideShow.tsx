import React, { useRef, useState } from 'react';
import './SlideShow.css';
import { getGUID } from '../../utils/utils';

type props = {
  h1? : string;
  p? : string;
  imgURLs? : string[];
};

const CN : string = 'SlideShow';

export default function SlideShow( {
  h1 = 'title here',
  p = 'body copy here',
  imgURLs = [
    'img/slideshow_000.jpg',
    'img/slideshow_001.jpg',
    'img/slideshow_002.jpg',
    'img/slideshow_003.jpg'
  ]
} : props ) {
  console.log( CN + ' rendering...' );

  const [ slideIndex, setSlideIndex ] = useState<number>( 0 );
  const stageRef = useRef<HTMLDivElement>( document.createElement( 'div' ) );

  return <div
    className="slide-show"
  >
    <div className="msg">
      <h1>{ h1 }</h1>
      <p>{ p }</p>
    </div>
    <div
      ref={ stageRef }
      className="stage"
    >
      { imgURLs.map( ( url : string, i : number ) => <img
        key={ i }
        src={ imgURLs[ i ] }
        alt=""
        className={ getSlideClassName( i ) }
        onAnimationEnd={ slideAnimationEnded }
      /> ) }
    </div>
  </div>;

  function slideAnimationEnded( e ) : void {
    const newSlideIndex : number = slideIndex === imgURLs.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex( newSlideIndex );
  }

  function getSlideClassName( i : number ) : string {
    switch( true ) {
      case slideIndex === i :
        return 'slide on-stage';
      case slideIndex === i - 1 :
        return 'slide next-up';
      case slideIndex === imgURLs.length - 1 && i === 0 :
        return 'slide next-up';
      default :
        return 'slide';
    }
  }

}
