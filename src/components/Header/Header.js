import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/keller.png'

export function Header() {
return (
    <header className="sticky top-0 flex justify-between space-y-1 bg-myDark box-border h-22 w-full p-2">
        {/* ici on place le logo */}
        <div className="bg-myDark px-12 py-1" >
            <Link to="/">
                <img src={logo} alt="" className="w-16" />
            </Link>
        </div>
        {/* ici on place la nav bar */}
        <nav className="w-full pr-12">
            <ul className="flex justify-end space-x-5">
                <Link to="/">
                    <li className="text-xs text-myWhite tracking-wider px-7 py-3 font-bold hover:text-myLightRed border-t border-b border-myWhite hover:border-myLightRed">ACCUEIL</li>
                </Link>
                <Link to="/services">
                    <li className="text-xs text-myWhite tracking-wider px-7 py-3 font-bold hover:text-myLightRed border-t border-b border-myWhite hover:border-myLightRed">SERVICES</li>
                </Link>
                <Link to="/realestateads">
                    <li className="text-xs text-myWhite tracking-wider px-5 py-3 font-bold hover:text-myLightRed border-t border-b border-myWhite hover:border-myLightRed">ANNONCES</li>
                </Link>
                <Link to="/contact">
                    <li className="text-xs text-myWhite tracking-wider px-5 py-3 font-bold hover:text-myLightRed border-t border-b border-myWhite hover:border-myLightRed">CONTACT</li>
                </Link>
            </ul>
        </nav>
    </header>
);
}