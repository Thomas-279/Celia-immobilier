
export function Services() {
    return (
    // le container
    <div className="w-screen h-full flex flex-wrap items-center bg-myLightGrey p-10">
    {/* element 1 */}
        <div className="flex justify-center items-center h-full w-1/3">
            <div className="w-full h-96 bg-myWhite p-5 m-5  border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-full m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-2xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">Estimation de biens</p>
                            <p className="text-center mb-4 uppercase text-2xl">text</p>
                            <p className="text-left">text</p>
                            <p className="text-left">tex</p>
                            <p className="text-left">text</p> 
                        </div>
                        <div className="h-2/6 flex justify-around">
                            <p>text</p>
                        </div>
                        <p className="text-center text-3xl px-8 py-2 underline">text</p>
                    </div>
                </div>
            </div>
        </div>
        {/* element 2 */}
        <div className="flex justify-center items-center h-full w-1/3">
            <div className="w-full h-96 bg-myWhite p-5 m-5 border border-myLightRed">
                <div className="flex w-full h-full">
                    <div className="w-1/2 h-full flex">
                        <div className="w-full h-full flex justify-center">
                            <p>ici une photo</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-5xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">text</p>
                            <p className="text-center mb-4 uppercase text-2xl">text</p>
                            <p className="text-left">text</p>
                            <p className="text-left">tex</p>
                            <p className="text-left">text</p> 
                        </div>
                        <div className="h-2/6 flex justify-around">
                            <p>text</p>
                        </div>
                        <p className="text-center text-3xl px-8 py-2 underline">text</p>
                    </div>
                </div>
            </div>
        </div>
        {/* element 3 */}
        <div className="flex justify-center items-center h-full w-1/3">
            <div className="w-full h-96 bg-myWhite p-5 m-5  border border-myLightRed">
                <div className="flex w-full h-full">
                    {/* <div className="w-1/2 h-full flex">
                        <div className="w-full h-full flex justify-center">
                            <p>ici une photo</p>
                        </div>
                    </div> */}
                    <div className="flex flex-col w-full m-4">
                        <div className="h-4/6 w-full px-8">
                            <p className="text-myLightRed text-xl tracking-wide uppercase text-center border-b border-myLightRed leading-normal">Estimation de biens</p>
                            <p className="text-center mb-4 uppercase text-2xl">text</p>
                            <p className="text-left">text</p>
                            <p className="text-left">tex</p>
                            <p className="text-left">text</p> 
                        </div>
                        <div className="h-2/6 flex justify-around">
                            <p>text</p>
                        </div>
                        <p className="text-center text-3xl px-8 py-2 underline">text</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    );
}