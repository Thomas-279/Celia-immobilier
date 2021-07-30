import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import { useSelector, useDispatch } from 'react-redux'
import { filteredData, getAllAds } from '../../redux/features/ads/ads'

import { ImSpinner6, ImPhone } from 'react-icons/im';
import 'react-slideshow-image/dist/styles.css'
import './style.css'

export function RealEstateAds() {
    // recup les data des annonces
    const ads = useSelector((state) => state.ads);
    
    const phonenumber = useSelector((state) => state.owner.phonenumber)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllAds());
    }, [dispatch]);

    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

    if (ads.status === "loading") {
        return (
            <main className="w-full h-full fixed block top-0 left-0 bg-myWhite opacity-75 z-50">
                <span className="text-myDarkRed opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{ top: "50%" }} >
                    <ImSpinner6 className="animate-spin" />
                </span>
            </main>
        )
    }

    // ici fonction pour filtrer les biens en vente ( vendus ou non )
    const handlefilter = (e) => {
        const adsData = [...ads.realEstateAds]
        if (e.target.checked) {
            const forSaleData = adsData.filter((data) => {
                return !data.sold
                })
                dispatch(filteredData(forSaleData))
        } else {
            dispatch(getAllAds())
        }
    };


    return (
    // le container
    <main className="w-full flex flex-col items-center bg-myLightGrey p-3 lg:p-10">
        <div>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-myDarkRed" onChange={handlefilter} /><span className="ml-2 text-myDarkRed">Afficher uniquement les biens en vente</span>
            </label>
        </div>
    {/* elements */}
    {ads.realEstateAds.map((data) => (
        <section className="flex justify-center items-center h-full w-full xl:w-11/12" key={data.id}>
            <div className={"w-full md:h-96 p-2 md:p-5 my-2 md:m-5 shadow-xl rounded-2xl" + (data.sold ? ' bg-myLessLightGrey' : ' bg-myWhite')}>
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className={"md:w-1/2 flex " + (data.sold ? ' bg-myLessLightGrey' : 'bg-myWhite')}>
                        <div className="w-full flex justify-center">
                            {/* Ici test de caroussel */}                        
                            <div className="containerSlide w-72 md:w-96">
                                <Slide {...proprietes}>
                                    {data.pics.map((pic) => (
                                        <div className="each-slide" key={pic.id} >
                                            <div className="flex justify-center">
                                                <img className={"max-w-sm h-auto filter " + (data.sold ? 'grayscale' : '')} src={pic.url} alt={pic.url} />
                                            </div>
                                        </div>
                                    ))}
                                    {/* <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter " + (data.sold ? ' grayscale' : '')} src={data.pics[0].url} alt={data.pics[0].url} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics[1].url} alt={data.pics[1].url} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics[2].url} alt={data.pics[2].url} />
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div className="flex justify-center">
                                            <img className={"max-w-sm h-auto filter" + (data.sold ? ' grayscale' : '')} src={data.pics[3].url} alt={data.pics[3].url} />
                                        </div>
                                    </div> */}
                                </Slide>
                                {(data.exclusivity ? <p className="text-center text-xs m-auto md:text-base mb:2 md:mb-4 w-5/6 text-myWhite bg-myLightRed">Exclusivité Keller Williams Trianon</p> : '')}
                            </div>
                            {/* Ici test de caroussel */}
                        </div>
                    </div>
                    <div className="relative flex flex-col md:m-4 md:w-1/2">
                        <div className="h-4/6 w-full md:py-4 md:px-8">
                            <p className="text-myLightRed my-2 text-xl md:text-3xl lg:text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">{data.home_status}</p>
                            <p className="text-center mb-2 uppercase text-xs md:text-lg lg:text-2xl">{data.home_location}</p>
                            <p className="text-left text-xs md:text-base">{data.home_type}</p>
                            <p className="text-left text-xs md:text-base">{data.home_size}</p>
                            <p className="text-left text-xs md:text-base">{data.description}</p> 
                        </div>
                        <div className="h-2/6 flex flex-col justify-end">
                            <p className="text-center text-lg md:text-2xl lg:text-3xl px-8 font-bold">{data.home_price} €</p>
                        </div>
                        <div className="absolute right-1 bottom-1">
                            <a href={"tel:" + phonenumber}>
                                <ImPhone className="text-myLightRed w-4 h-4 md:w-6 md:h-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ))}
    </main>
    );
}