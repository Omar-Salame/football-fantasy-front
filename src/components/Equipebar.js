import React from "react";
import logofar from "../image/logo/far.png";
import logoirt from "../image/logo/irt.png";
import logowac from "../image/logo/wac.png";
import logorca from "../image/logo/rca.png";
import logorsb from "../image/logo/rsb.png";
import logomas from "../image/logo/mas.png";
import logohusa from "../image/logo/husa.png";
import logoits from "../image/logo/its.png";
import logoberrechid from "../image/logo/berrechid.png";
import logomat from "../image/logo/mat.png";
import logomco from "../image/logo/mco.png";
import logofus from "../image/logo/fus.png";
import logoock from "../image/logo/ock.png";
import logoocs from "../image/logo/ocs.png";
import logosccm from "../image/logo/sccm.png";
import logozemamra from "../image/logo/zemamra.png";
import logojss from "../image/logo/jss.png";


export default function Equipebar(){
    return(
        <div className="bar">
            <h4><span className="gray">Liste d'équipes</span></h4>
            <img src={logoberrechid} alt="logo" className="logo--img"/>
            <img src={logofar} alt="logo" className="logo--img"/>
            <img src={logohusa} alt="logo" className="logo--img"/>
            <img src={logomat} alt="logo" className="logo--img"/>
            <img src={logoirt} alt="logo" className="logo--img"/>
            <img src={logojss} alt="logo" className="logo--img"/>
            <img src={logofus} alt="logo" className="logo--img"/>
            <img src={logozemamra} alt="logo" className="logo--img"/>
            <img src={logosccm} alt="logo" className="logo--img"/>
            <img src={logorca} alt="logo" className="logo--img"/>
            <img src={logoocs} alt="logo" className="logo--img"/>
            <img src={logoock} alt="logo" className="logo--img"/>
            <img src={logomco} alt="logo" className="logo--img"/>
            <img src={logoits} alt="logo" className="logo--img"/>
            <img src={logorsb} alt="logo" className="logo--img"/>
            <img src={logomas} alt="logo" className="logo--img"/>
            <img src={logowac} alt="logo" className="logo--img"/>
        </div>      
    )
}
