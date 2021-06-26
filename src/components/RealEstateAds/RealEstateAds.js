import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import ModalImage from "react-modal-image"
import { useSelector, useDispatch } from 'react-redux'
import { setAdsData } from '../../redux/features/ads/ads'

import 'react-slideshow-image/dist/styles.css'
import './style.css'

export function RealEstateAds() {
    const ads = useSelector((state) => state.ads);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAdsData());
    }, []);

    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }


    return (
    // le container
    <div className="w-full flex flex-col items-center bg-myLightGrey p-10">
    {/* element 1 */}
    {ads.realEstateAds.map((data) => (
        <div className="flex justify-center items-center h-full w-11/12" key={data.id}>
            <div className={"w-full h-96 p-5 m-5 shadow-xl border" + (data.sold ? ' bg-myLessLightGrey border-myDark' : ' bg-myWhite border-myLightRed')}>
                <div className="flex w-full h-full">
                    <div className={"w-1/2 h-full flex bg-myWhite" + (data.sold ? ' bg-myLessLightGrey' : '')}>
                        <div className="w-full h-full flex justify-center ">
                            {/* une seule image */}
                            {/* <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic1} alt={data.pics.pic1} /> */}
                            {/* Ici test de caroussel */}                        
                            <div className="containerSlide w-96">
                                <Slide {...proprietes}>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic1} alt={data.pics.pic1} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic2} alt={data.pics.pic2} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic3} alt={data.pics.pic3} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic4} alt={data.pics.pic4} />
                                        </div>
                                    </div>
                                </Slide>
                                {(data.exclu ? <p className="text-center mb-4 text-myWhite bg-myLightRed">Exclusivité Keller Williams Trianon</p> : '')}
                            </div>
                            {/* Ici test de caroussel */}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">{data.status}</p>
                            <p className="text-center mb-4 uppercase text-2xl">{data.location}</p>
                            <p className="text-left">{data.type}</p>
                            <p className="text-left">{data.size}</p>
                            <p className="text-left">{data.description}</p> 
                        </div>
                        <div className="h-2/6 flex flex-col justify-end">
                            <p className="text-center text-3xl px-8 py-2 underline">{data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    );
}