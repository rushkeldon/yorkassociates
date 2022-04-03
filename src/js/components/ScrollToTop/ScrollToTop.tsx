import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect( () => {
    const root : HTMLDivElement = window.document.getElementById( 'root' ) as HTMLDivElement;
    root.scrollTo( {
      top: 0,
      left: 0,
    // @ts-ignore
      behavior: 'instant'
    } );
  }, [ pathname ] );

  return null;
}
