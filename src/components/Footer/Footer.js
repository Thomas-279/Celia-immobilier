import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibility } from '../../redux/features/owner/owner'

import bareme from '../../assets/BaremeKWTrianon.pdf'


export function Footer() {
  const visible = useSelector((state) => state.owner.visibility)
  const dispatch = useDispatch();
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      dispatch(setVisibility(true));
    }
    else if (scrolled <= 100) {
      dispatch(setVisibility(false));
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="w-full flex justify-center bg-myDark box-border h-5 p-1 text-myWhite bottom-0 space-x-3">
      <div className="w-6/12 flex justify-around">
        <a href="https://www.trianon.kwimmo.fr/annonces/agent/711458-celia-dreux.html" target="_blank" rel="noreferrer"><p className="text-xs">Agent commercial en immobilier Keller Williams Trianon</p></a>
        <p className="text-xs">-</p>
        <p className="text-xs">RSAC : 123456789 Versailles</p>
        <p className="text-xs">-</p>
        <p className="text-xs"><a href={bareme} target="_blank" rel="noreferrer">Barème Honoraires KW Trianon</a></p>
      </div>
      <div className="fixed right-4 bottom-0">
          <button
            onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
            name="Back to top"
          >↑</button>
      </div>
    </div>
  )
}