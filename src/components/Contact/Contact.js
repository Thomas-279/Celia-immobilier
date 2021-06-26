import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNameValue, setMailValue, setPhonenumberValue, resetState } from '../../redux/features/sendMail/sendMail'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
import emailjsApiKeys from '../../apiKeys/emailjsApiKeys';

import FacebookLogo from '../../assets/images/logo/social/facebook.png'
import InstagramLogo from '../../assets/images/logo/social/instagram.png'
import LinkedinLogo from '../../assets/images/logo/social/linkedin.png'
import PhoneLogo from '../../assets/images/logo/social/phone.png'


export function Contact() {
    const phonenumber = useSelector((state) => state.owner.phonenumber)
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
    <div className="w-full h-screen flex flex-col items-center bg-myLightGrey p-10">
    {/* form contact 2 */}
        <div className="flex flex-col justify-center items-center h-full w-11/12">
            <h2 className="block w-full text-center text-myDark text-2xl font-bold uppercase">Contact</h2>
            <div className="flex justify-around w-full h-96 bg-myWhite shadow-xl p-6 m-5 border border-myLightRed">
                <a href="https://www.facebook.com/celiadreuxkw" target="_blank" rel="noreferrer"><img className="w-12 h-12" src={FacebookLogo} alt={FacebookLogo} /></a>
                <a href="https://www.instagram.com/celiadreuxkw/" target="_blank" rel="noreferrer"><img className="w-12 h-12" src={InstagramLogo} alt={InstagramLogo} /></a>
                <a href="https://www.linkedin.com/in/c%C3%A9lia-dreux-71358a113/" target="_blank" rel="noreferrer"><img className="w-12 h-12" src={LinkedinLogo} alt={LinkedinLogo} /></a>
                <a href={"tel:" + phonenumber}><img className="w-12 h-12" src={PhoneLogo} alt={PhoneLogo} /></a>
            </div>
            <div className="w-full bg-myWhite shadow-xl p-5 m-5 border border-myLightRed">
                <h2 className="block w-full text-center text-myDark text-2xl font-bold mb-6">Ou transmettez-moi vos coordonnées :</h2>
                <div className="w-1/2 flex flex-col m-auto">
                    <form method="post" onSubmit={handleOnSubmit} >
                        <div className="w-full flex flex-col justify-around mb-4">
                            <div className="flex flex-col">
                                <label className="mb-2 py-2 font-bold text-lg text-myDark" htmlFor="first_name">Votre nom :</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="text" name="name" id="name" onChange={(event) => dispatch(setNameValue(event.target.value))}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 py-2 font-bold text-lg text-myDark" htmlFor="email">Votre email :</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="email" name="email" id="email" onChange={(event) => dispatch(setMailValue(event.target.value))}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 py-2 font-bold text-lg text-myDark" htmlFor="email">Numéro de téléphone :</label>
                                <input className="border py-2 px-3 text-myDark focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent" type="phone" name="phonenumber" id="phonenumber" onChange={(event) => dispatch(setPhonenumberValue(event.target.value))}/>
                            </div>
                        </div>
                        <button className="block font-bold text-myDark border-transparent hover:text-myLightRed focus:outline-none focus:ring-1 focus:ring-myLightRed focus:border-transparent uppercase text-lg mx-auto w-40" type="submit">Envoyer</button>
                    </form>
                </div>

            </div>
        </div>
    </div>

    );
}