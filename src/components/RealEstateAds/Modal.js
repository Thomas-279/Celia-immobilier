import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setShowModal, setCLoseModal } from '../../redux/features/ads/ads'

export default function Modal({ picture }) {
    const showModal = useSelector((state) => state.ads.showModal);
    const dispatch = useDispatch();

    return (
    <>
        <img
        className="focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        src={picture}
        alt={picture}
        onClick={() => dispatch(setShowModal())}
        />
        {showModal ? (
            
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
            <div className="relative w-auto my-2 mx-auto max-h-96 max-w-96">

                <div className="border-0 shadow-lg relative flex flex-col w-full bg-myWhite outline-none focus:outline-none">

                <div className="flex items-start justify-between p-5 border-b border-solid border-myDarkRed rounded-t">
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => dispatch(setCLoseModal())}
                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                    </span>
                    </button>
                </div>
                <img className="max-h-96 max-w-96" src={picture} alt={picture} />

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(setCLoseModal())}
                    >
                    Close
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
        ) : null}
    </>
    );
}