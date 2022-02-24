import React from "react";
import '../style.css'


export default function Navbar(){
    return(
        <nav className="Nav">
            <div className="logo">
                <img src={require('../images/reactimage.png') }  className="img"/>
                <p className="txt" >ReactFacts</p>
            </div>
            <div className="madeby">
                <p className="madebytxt">Developed by Mofe</p>
            </div>

        </nav>
    )
    
}