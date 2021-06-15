import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibility } from '../../redux/features/owner/owner'


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
    <div className="w-full flex justify-center flex-col lg:flex-row bg-myDark box-border h-5 p-1 text-myWhite fixed bottom-0 space-x-3">
      <div>
        <p className="text-xs">Agent commercial en immobilier Keller Williams Trianon</p>
        <p className="text-xs">-</p>
        <p className="text-xs">RSAC : 123456789 Versailles</p>
        <p className="text-xs">-</p>
        <p className="text-xs">Barème honoraires</p>
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