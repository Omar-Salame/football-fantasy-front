import React from "react";
import logoImage from "../image/logo/botolapro.png";


export default function Navbar(){
    return(
        <nav>
            <img src={logoImage} alt="logo" className="logo--botola"/>
            <div className="bar">
                <a href="/">Accueil</a>
                <a href="/ligue">Botola Pro</a>
                <a href="/fantasy">Fantasy</a>
            </div>
            <a href="/login">Se Connecter</a>
        </nav>
    )
}
