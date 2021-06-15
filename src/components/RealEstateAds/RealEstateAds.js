import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAdsData } from '../../redux/features/ads/ads'


export function RealEstateAds() {
    const ads = useSelector((state) => state.ads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAdsData(ads))
    })
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* element 1 */}
    {ads.realEstateAds.map((data) => (
        <div className="flex justify-center items-center h-full w-full" key={data.id} >
            <div className="w-full h-96 bg-myLightGrey p-5 m-5">
                <div className="flex flex-col w-full h-full border border-myDArk">
                    <div className="h-1/2 flex">
                        <div className="w-1/4">
                            <img className="w-1/2" src={data.pics.pic1} alt={data.pics.pic1}/>
                        </div>
                        <div className="w-1/2">
                            <p>{data.status}</p>
                            <p>{data.location}</p>
                            <p>{data.type}</p>
                            <p>{data.size}</p>
                            <p>{data.price}</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-1/2">
                        <div className="flex justify-around h-1/2 w-full">
                            <img className="w-16" src={data.pics.pic2} alt={data.pics.pic2}/>
                            <img className="w-16" src={data.pics.pic3} alt={data.pics.pic3}/>
                            <img className="w-16" src={data.pics.pic4} alt={data.pics.pic4}/>
                        </div>
                        <p className="h-1/2">description</p>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    );
}