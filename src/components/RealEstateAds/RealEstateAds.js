import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import { useSelector, useDispatch } from 'react-redux'
import { setAdsData } from '../../redux/features/ads/ads'

import 'react-slideshow-image/dist/styles.css'
import './style.css'

import PhoneLogo from '../../assets/images/logo/social/phone.png'

export function RealEstateAds() {
    const ads = useSelector((state) => state.ads);
    const phonenumber = useSelector((state) => state.owner.phonenumber)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAdsData());
    });

    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }


    return (
    // le container
    <main className="w-full flex flex-col items-center bg-myLightGrey p-3 lg:p-10">
    {/* elements */}
    {ads.realEstateAds.map((data) => (
        <section className="flex justify-center items-center h-full w-full xl:w-11/12" key={data.id}>
            <div className={"w-full md:h-96 p-2 md:p-5 my-2 md:m-5 shadow-xl border" + (data.sold ? ' bg-myLessLightGrey border-myDark' : ' bg-myWhite border-myLightRed')}>
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className={"md:w-1/2 flex " + (data.sold ? ' bg-myLessLightGrey' : 'bg-myWhite')}>
                        <div className="w-full flex justify-center">
                            {/* une seule image */}
                            {/* <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics.pic1} alt={data.pics.pic1} /> */}
                            {/* Ici test de caroussel */}                        
                            <div className="containerSlide w-72 md:w-96">
                                <Slide {...proprietes}>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter " + (data.sold ? ' grayscale' : '')} src={data.pics.pic1} alt={data.pics.pic1} />
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
                                {(data.exclu ? <p className="text-center text-xs m-auto md:text-base mb:2 md:mb-4 w-5/6 text-myWhite bg-myLightRed">Exclusivité Keller Williams Trianon</p> : '')}
                            </div>
                            {/* Ici test de caroussel */}
                        </div>
                    </div>
                    <div className="relative flex flex-col md:m-4 md:w-1/2">
                        <div className="h-4/6 w-full md:py-4 md:px-8">
                            <p className="text-myLightRed my-2 text-xl md:text-3xl lg:text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">{data.status}</p>
                            <p className="text-center mb-2 uppercase text-xs md:text-lg lg:text-2xl">{data.location}</p>
                            <p className="text-left text-xs md:text-base">{data.type}</p>
                            <p className="text-left text-xs md:text-base">{data.size}</p>
                            <p className="text-left text-xs md:text-base">{data.description}</p> 
                        </div>
                        <div className="h-2/6 flex flex-col justify-end">
                            <p className="text-center text-lg md:text-2xl lg:text-3xl px-8 underline font-bold">{data.price}</p>
                        </div>
                        <div className="absolute right-1 bottom-1">
                            <a href={"tel:" + phonenumber}><img className="w-4 h-4 md:w-6 md:h-6" src={PhoneLogo} alt={PhoneLogo} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ))}
    </main>
    );
}