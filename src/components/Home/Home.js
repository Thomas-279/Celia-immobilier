import React from 'react'
import { useSelector } from 'react-redux'


export function Home() {
    const name = useSelector((state) => state.owner.name)
    // const dispatch = useDispatch()
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* element 1 */}
        <div className="w-full h-96 bg-myLightGrey">
            <h1>{name}</h1>
            <div className="flex space-x-3">
                <p>ici la présentation</p>
                <p>ensuite une photo</p>
            </div>
        </div>
    {/* element 2 */}
        <div className="w-full h-96 bg-myLessLightGrey">
            <div className="flex space-x-3">
                <p className="">ici sous container 2</p>
            </div>
        </div>
    </div>

    );
}
