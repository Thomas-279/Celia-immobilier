import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/keller.png'

export function Header() {
return (
    <header className="flex justify-between space-y-3 bg-myDark box-border h-22 w-full p-4">
        {/* ici on place le logo */}
        <div className="bg-myDark px-5 py-1" >
            <Link to="/">
                <img src={logo} alt="" className="w-20" />
            </Link>
        </div>
        {/* ici on place la nav bar */}
        <nav className="w-full pr-12">
            <ul className="flex justify-end space-x-5">
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