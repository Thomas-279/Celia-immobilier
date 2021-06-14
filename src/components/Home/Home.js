import React from 'react'
import { useSelector } from 'react-redux'


export function Home() {
    const name = useSelector((state) => state.owner.name)
    // const dispatch = useDispatch()
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* element 1 */}
        <div className="flex justify-center items-center h-full w-full">
            <div className="w-11/12 h-96 bg-myLightGrey p-5 m-2">
                <h1>{name}</h1>
                <div className="flex space-x-3">
                    <p>ici la présentation</p>
                    <p>ensuite une photo</p>
                </div>
            </div>
        </div>
    {/* element 2 */}
    <div className="flex justify-center items-center h-full w-full">
            <div className="w-11/12 h-96 bg-myLessLightGrey p-5 m-2">
                <div className="flex space-x-3">
                    <p>2e container</p>
                </div>
            </div>
        </div>
    </div>

    );
}
