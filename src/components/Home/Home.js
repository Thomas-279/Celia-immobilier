import React from 'react'
import { useSelector } from 'react-redux'

import Owner from '../../assets/images/owner/portrait.jpg'
import logo from '../../assets/images/logo/keller2.png'
import test1 from '../../assets/images/logo/tests/map.png'

export function Home() {
    const name = useSelector((state) => state.owner.name)
    const job = useSelector((state) => state.owner.job)
    const mail = useSelector((state) => state.owner.mail)
    const phonenumber = useSelector((state) => state.owner.phonenumber)
    // const dispatch = useDispatch()
    return (
    // le container
    <div className="w-full flex flex-col items-center bg-myLightGrey p-10">
    {/* element 1 */}
        <div className="flex justify-center items-center h-full w-11/12">
            <div className="w-full h-96 bg-myWhite p-5 m-5  border border-myLightRed">
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
            <div className="w-full h-96 bg-myWhite p-5 m-5  border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="w-1/2 h-full flex  bg-myWhite">
                        <div className="w-full h-full flex justify-center">
                            <img src={test1} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="flex flex-col h-full w-full px-8">
                            {/* <p className="text-myLightRed text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">text</p> */}
                            <p className="h-1/2 text-center mb-4 uppercase text-2xl">Secteur</p>
                            <p className="h-1/2 text-left">Une large zone sur l'ensemble de l'ouest parisien, qui me permets de répondre à l'ensemble de vos besoins d'achats ou de ventes</p>
                        </div>
                        {/* <div className="h-1/3 flex justify-around">
                            <p>text</p>
                        </div> */}
                        {/* <p className="text-center text-3xl px-8 py-2 underline">text</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
