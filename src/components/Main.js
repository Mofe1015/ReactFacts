import React from "react";
import '../style.css'

export default function Main(props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
            <div className="mainhead">
                <h1 className="maintxt">Facts about </h1>
                <h1 className="maintxt1">React</h1>
            </div>
            
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
    
};