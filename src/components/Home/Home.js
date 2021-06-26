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
    <div className="w-full flex flex-col items-center bg-myLightGrey p-10">
    {/* element 1 */}
        <div className="flex justify-center items-center h-full w-11/12">
            <div className="w-full h-96 bg-myWhite p-5 m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">{name}</p>
                            <p className="text-center mb-4 uppercase text-xl my-2">{job}</p>
                        </div>
                        <div className="flex justify-center my-6">
                            <img src={logo} alt={logo} className="h-20" />
                        </div>
                        <p className="text-center text-2xl px-8 py-1 hover:underline"><a href={"mailto:" + mail}>{mail}</a></p>
                        <p className="text-center text-2xl px-8 py-1 hover:underline"><a href={"tel:" + phonenumber} >{phonenumber}</a></p>
                    </div>
                    <div className="w-1/2 h-full flex  bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={Owner} alt={Owner} className="border border-myDark" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* element 2 */}
    <div className="flex justify-center items-center h-full w-11/12">
            <div className="w-full h-96 bg-myWhite p-5 m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="w-1/2 h-full flex bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={test1} alt={test2} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="flex flex-col h-full w-full px-8">
                            <h2 className="text-myLightRed text-3xl h-1/2 text-center mb-4 uppercase border-b border-myLightRed leading-normal">Services : </h2>
                            <p className="h-1/2 text-xl text-left"># Estimation gratuite de votre bien</p>
                            <p className="h-1/2 text-xl text-left"># Photographie - Mise en valeur</p>
                            <p className="h-1/2 text-xl text-left"># Visite virtuelle / rendu 3D</p>
                            <p className="h-1/2 text-xl text-left"># Commercialisation sur réseaux</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* element 3 */}
        <div className="flex justify-center items-center h-full w-11/12">
            <div className="w-full h-96 bg-myWhite p-5 m-5 shadow-xl border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="flex flex-col h-full w-full px-8">
                            <h2 className="text-myLightRed text-3xl h-1/2 text-center mb-4 uppercase border-b border-myLightRed leading-normal">Secteur d'activité</h2>
                            <p className="h-1/2 text-left">Une large zone sur l'ensemble de l'ouest parisien, qui me permets de répondre à l'ensemble de vos besoins d'achats ou de ventes</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={map} alt={map} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}