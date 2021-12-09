import * as signals from 'signals';

export function startScrollDataAttr( element : HTMLElement ) : void {
  const debounce = ( fn ) => {
    let frame;
    return ( ...params ) => {
      frame && cancelAnimationFrame( frame ) ;

      frame = requestAnimationFrame( () => {
        fn( ...params );
      } );
    };
  };

  const updateDataScroll = () => {
    element.setAttribute( 'data-scroll', element.scrollTop.toString() );
  };

  element.addEventListener( 'scroll', debounce( updateDataScroll ), { passive : true } );

  updateDataScroll();
}




export function getSignal( name : string, logLevel = 1 ) : signals.Signal {
  let signal : signals.Signal = new signals.Signal();
  if( logLevel > 0 ) {
    signal.add( ( ...args ) : void => {
      console.log( 'signal dispatched : ' + name );
      if( logLevel === 2 ) console.log( '\twith args : ', { ...args } );
    } );
  }

  return signal;
}
