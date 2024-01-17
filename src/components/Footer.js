import React from "react";
import logoImage from "../image/logo/botolapro.png";
import gitLogo from "../image/logo/github.png";
import doitLogo from "../image/logo/doit.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <img src={logoImage} alt="logo" className="logo--footer"/>  
                <a href="https://github.com/Omar-Salame/football-fantasy"><img src={gitLogo} alt="logo" className="logo--footer"/></a>
                <a href="https://francoisbrucker.github.io/do-it/"><img src={doitLogo} alt="logo" className="logo--footer"/></a>
            </div>
            <p className="footer-copy">&copy; {new Date().getFullYear()} Botola Pro. All rights reserved.</p>
        </footer>
    )
}