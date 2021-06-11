
export function Services() {
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* element 1 */}
        <div className="w-full h-96 bg-myLightGrey">
            <div className="flex space-x-3">
                <p>les services</p>
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