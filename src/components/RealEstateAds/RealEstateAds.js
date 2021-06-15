import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAdsData } from '../../redux/features/ads/ads'


export function RealEstateAds() {
    const ads = useSelector((state) => state.ads);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAdsData());
    }, []);
    return (
    // le container
    <div className="w-full flex flex-col items-center bg-myLessLightGrey p-10">
    {/* element 1 */}
    {ads.realEstateAds.map((data) => (
        <div className="flex justify-center items-center h-full w-11/12" key={data.id}>
            <div className="w-full h-96 bg-myWhite p-5 m-5  border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="w-1/2 h-full flex  bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img className="max-w-sm h-auto" src={data.pics.pic1} alt={data.pics.pic1} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">{data.status}</p>
                            <p className="text-center mb-4 uppercase text-2xl">{data.location}</p>
                            <p className="text-left">Type: {data.type}</p>
                            <p className="text-left">{data.size}</p>
                            <p className="text-left">{data.description}</p> 
                        </div>
                        <div className="h-2/6 flex justify-around">
                            <img className="max-w-xs h-auto" src={data.pics.pic1} alt={data.pics.pic1} />
                            <img className="max-w-xs h-auto" src={data.pics.pic2} alt={data.pics.pic2} />
                            <img className="max-w-xs h-auto " src={data.pics.pic3} alt={data.pics.pic3} />
                        </div>
                        <p className="text-center text-3xl px-8 py-2 underline">{data.price}</p>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    );
}


    {/* <div className="flex justify-center items-center h-full w-11/12" key={data.id} >
    <div className="w-full h-96 bg-myWhite p-5 m-5">
        <div className="flex flex-col w-full h-full bg-myWhite p-5">
            <div className="h-1/2 flex bg-myWhite p-3">
                <div className="w-1/2">
                    <img className="max-w-xs h-auto" src={data.pics.pic1} alt={data.pics.pic1}/>
                </div>
                <div className="w-1/2">
                    <p className="text-myLightRed text-5xl tracking-wide uppercase text-right">{data.status}</p>
                    <p className="text-right">{data.location}</p>
                    <p className="text-right">{data.type}</p>
                    <p className="text-right">{data.size}</p>
                    <p className="text-right">{data.price}</p>
                </div>
            </div>
            <div className="flex flex-col h-1/2 p-3">
                <div className="flex justify-around h-1/2 w-full">
                    <p> </p>
                    <img className="max-w-24 h-auto" src={data.pics.pic2} alt={data.pics.pic2}/>
                    <img className="max-w-24 h-auto" src={data.pics.pic3} alt={data.pics.pic3}/>
                    <img className="max-w-24 h-auto" src={data.pics.pic4} alt={data.pics.pic4}/>
                </div>

            </div>
            <p className="h-1/2 text-right">{data.description}</p>
        </div>
    </div>
    </div> */}