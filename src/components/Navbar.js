import React from "react";
import '../style.css'


export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div className="logo">
                <img src={require('../images/reactimage.png') }  className="img"/>
                <p className="txt" >ReactFacts</p>
            </div>

            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </nav>
    )
    
}