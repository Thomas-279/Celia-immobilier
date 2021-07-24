import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/keller.png'

export function Header() {
return (
    <header className="block top-0 flex justify-between space-y-1 md:h-22 w-full p-2 z-20">
        {/* ici on place le logo */}
        <div className="px-3 md:px-6 lg:px-12 xl:px-15 py-1" >
            <Link to="/">
                <img src={logo} alt="logoKW" className="w-8 md:w-16" />
            </Link>
        </div>
        {/* ici on place la nav bar */}
        <nav className="w-full pr-2 md:pr-12">
            <ul className="flex justify-end space-x-5">
                <Link to="/">
                    <li className="text-xs text-myLightRed tracking-wider px-2 md:px-5 md:py-3 font-bold hover:text-myLightRed border-b border-myWhite hover:border-myLightRed">ACCUEIL</li>
                </Link>
                <Link to="/realestateads">
                    <li className="text-xs text-myLightRed tracking-wider px-2 md:px-5 md:py-3 font-bold hover:text-myLightRed border-b border-myWhite hover:border-myLightRed">ANNONCES</li>
                </Link>
                <Link to="/contact">
                    <li className="text-xs text-myLightRed tracking-wider px-2 md:px-5 md:py-3 font-bold hover:text-myLightRed border-b border-myWhite hover:border-myLightRed">CONTACT</li>
                </Link>
            </ul>
        </nav>
    </header>
);
}