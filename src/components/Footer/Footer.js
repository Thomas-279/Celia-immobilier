import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibility } from '../../redux/features/owner/owner'

import { FaArrowAltCircleUp } from 'react-icons/fa';

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
    });
  }
  window.addEventListener('scroll', toggleVisible);
  return (
    <footer className="w-full flex justify-center bg-myWhite box-border p-1 text-myLightRed bottom-0 space-x-3">
      <div className="w-11/12 flex flex-col items-center md:flex-row md:justify-between">
        <a href="https://www.trianon.kwimmo.fr/annonces/agent/711458-celia-dreux.html" target="_blank" rel="noreferrer"><p className="text-xs">Agent commercial en immobilier Keller Williams Trianon</p></a>
        <p className="text-xs">RSAC : 123456789 Versailles</p>
        <p className="text-xs"><a href={bareme} target="_blank" rel="noreferrer">Barème Honoraires KW Trianon</a></p>
      </div>
      <div className="fixed right-4 bottom-10 hidden md:block text-myLightRed animate-bounce">
          <FaArrowAltCircleUp
            onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
            name="Back to top"
          />
      </div>
    </footer>
  )
}