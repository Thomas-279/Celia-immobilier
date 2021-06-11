
export function Contact() {
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* form contact 2 */}
        <div className="flex justify-center items-center h-full w-full">
                <div className="w-1/2 bg-white shadow-2xl p-5 m-4">
                    <h2 className="block w-full text-center text-myDark text-2xl font-bold mb-6">Comment puis-je vous aider ?</h2>
                    <form method="post">
                        <div className="flex justify-around mb-4">
                            <div className="flex flex-col">
                                <label className="mb-2 font-bold text-lg text-myDark" htmlFor="first_name">Votre nom</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="text" name="first_name" id="first_name" />
                            </div>
                            {/* <div className="flex flex-col">
                                <label className="mb-2 font-bold text-lg text-myDark" htmlFor="last_name">Votre nom</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="text" name="last_name" id="last_name" />
                            </div> */}
                        {/* </div>
                        <div className="flex justify-around mb-4"> */}
                            <div className="flex flex-col">
                                <label className="mb-2 font-bold text-lg text-myDark" htmlFor="email">Votre email</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="email" name="email" id="email" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 font-bold text-lg text-myDark" htmlFor="email">Numéro de téléphone</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="phone" name="phonenumber" id="phonenumber" />
                            </div>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-myBlack" htmlFor="message">Votre message</label>
                            <textarea className="border py-2 px-3 text-myDark h-40 focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="text" name="message" id="message" />
                        </div>
                        <button className="block font-bold text-myDark border-2 border-transparent hover:text-myLightRed uppercase text-lg mx-auto p-2 w-40" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        {/* test */}

        {/* test */}
    </div>

    );
}