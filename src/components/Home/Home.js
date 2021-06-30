import React from 'react'
import { useSelector } from 'react-redux'

import Owner from '../../assets/images/owner/portrait2.jpg'
import logo from '../../assets/images/logo/keller2.png'
import map from '../../assets/images/logo/tests/map.png'
import test1 from '../../assets/images/images/test1.jpg'
import test2 from '../../assets/images/images/test2.png'



export function Home() {
    const name = useSelector((state) => state.owner.name)
    const job = useSelector((state) => state.owner.job)
    const mail = useSelector((state) => state.owner.mail)
    const phonenumber = useSelector((state) => state.owner.phonenumber)

    return (
    // le container
    <main className="w-full flex flex-col items-center bg-myLightGrey p-3 md:p-10">
    {/* element 1 */}
        <section className="flex justify-center items-center h-full w-full md:w-11/12">
            <div className="w-full h-72 md:h-96 bg-myWhite p-2 md:p-5 my-2 md:m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="flex flex-col justify-around w-1/2 m-auto">
                        <div className="h-4/6 w-full py-4 md:px-8">
                            <h1 className="text-myLightRed tracking-wide uppercase text-center border-b border-myLightRed leading-normal text-xl md:text-3xl lg:text-4xl xl:text-5xl">{name}</h1>
                            <p className="text-center mb-4 uppercase my-2 text-sm md:text-base lg:text-lg">{job}</p>
                        </div>
                        <div className="flex justify-center my-6">
                            <img src={logo} alt={logo} className="h-12 md:h-20 object-contain md:object-scale-down" />
                        </div>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 md:py-1 hover:underline"><a href={"mailto:" + mail}>{mail}</a></p>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 md:py-1 hover:underline"><a href={"tel:" + phonenumber} >{phonenumber}</a></p>
                    </div>
                    <div className="w-1/2 h-full flex bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={Owner} alt={Owner} className="w-3/4 md:w-full object-contain md:object-scale-down" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* element 2 */}
        <section className="flex justify-center items-center h-full w-full md:w-11/12">
            <div className="w-full h-72 md:h-96 bg-myWhite p-2 md:p-5 my-2 md:m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="w-1/2 h-full flex bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={test1} alt={test2} className="w-11/12 md:w-full object-contain md:object-scale-down" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-around w-1/2 m-auto">
                        <div className="h-4/6 w-full py-4 md:px-8">
                            <h2 className="text-myLightRed tracking-wide uppercase text-center border-b border-myLightRed leading-normal text-xl md:text-3xl lg:text-4xl xl:text-5xl">Services</h2>
                        </div>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 py-1"># Estimation gratuite de votre bien</p>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 py-1"># Photographie - Mise en valeur</p>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 py-1"># Visite virtuelle / rendu 3D</p>
                        <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 py-1"># Commercialisation sur réseaux</p>
                    </div>

                </div>
            </div>
        </section>
        {/* element 3 */}
        <section className="flex justify-center items-center h-full w-full md:w-11/12">
            <div className="w-full h-72 md:h-96 bg-myWhite p-2 md:p-5 my-2 md:m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="flex flex-col justify-around w-1/2 m-auto">
                        <div className="h-1/3 w-full py-4 md:px-8">
                            <h2 className="text-myLightRed tracking-wide uppercase text-center border-b border-myLightRed leading-normal text-xl md:text-3xl lg:text-4xl xl:text-5xl">Secteur</h2>
                        </div>
                        <div className="h-2/3 flex w-full md:px-8">
                            <p className="text-center text-xs md:text-lg lg:text-2xl px-2 md:px-8 py-1">
                                Une large zone sur l'ensemble de l'ouest parisien, qui me permets de répondre à l'ensemble de vos besoins d'achats ou de ventes
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex bg-myWhite m-auto">
                        <div className="w-full h-full flex justify-center">
                            {/* <a href="https://www.google.fr/maps/place/Keller+Williams+Trianon/@48.8105978,2.1407103,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67dcd70cb2b3f:0xd8c0e9e3189b850b!8m2!3d48.8105913!4d2.1429297"> */}
                                <img src={map} alt={map} className="w-11/12 md:w-full object-contain md:object-scale-down" />
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}