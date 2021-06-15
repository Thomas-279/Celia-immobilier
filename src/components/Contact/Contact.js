import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameValue, setMailValue, setPhonenumberValue, resetState } from '../../redux/features/sendMail/sendMail'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
import emailjsApiKeys from '../../apiKeys/emailjsApiKeys';


export function Contact() {
    const dispatch = useDispatch();

    // validation du formulaire et envoie des données
    const handleOnSubmit=(event)=>{
        event.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('default_service', emailjsApiKeys.TEMPLATE_ID, event.target, emailjsApiKeys.USER_ID)
        .then(result => {
            Swal.fire({
                title: 'Merci',
                text: 'Je vous recontacterais très rapidement.',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#CC0202'
            })
        },
        error => {
            Swal.fire({
                title: 'Erreur',
                text: 'Merci de réessayer',
                icon: 'error',
                confirmButtonText: 'Quitter',
                confirmButtonColor: '#CC0202'
            })
        });
        dispatch(resetState());
        event.target.reset();
        }
    return (
    // le container
    <div className="w-full flex flex-col">
    {/* form contact 2 */}
        <div className="flex justify-center items-center h-full w-full">
            <div className="w-1/2 bg-myWhite shadow-2xl p-10 m-4">
                <h2 className="block w-full text-center text-myDark text-2xl font-bold mb-6">Laissez vos coordonnées</h2>
                <form method="post" onSubmit={handleOnSubmit} >
                    <div className="flex flex-col justify-around mb-4">
                        <div className="flex flex-col">
                            <label className="mb-2 font-bold text-lg text-myDark" htmlFor="first_name">Votre nom</label>
                            <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="text" name="name" id="name" onChange={(event) => dispatch(setNameValue(event.target.value))}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-bold text-lg text-myDark" htmlFor="email">Votre email</label>
                            <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="email" name="email" id="email" onChange={(event) => dispatch(setMailValue(event.target.value))}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-bold text-lg text-myDark" htmlFor="email">Numéro de téléphone</label>
                            <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="phone" name="phonenumber" id="phonenumber" onChange={(event) => dispatch(setPhonenumberValue(event.target.value))}/>
                        </div>
                    </div>
                    <button className="block font-bold text-myDark border-2 border-transparent hover:text-myLightRed focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent uppercase text-lg mx-auto p-2 w-40" type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    </div>

    );
}