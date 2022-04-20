import React from "react";
import  ReactDOM  from "react-dom";
import './style.css'
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App(){
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main  darkMode={darkMode} />
    </>
  ) 
}

ReactDOM.render( <App />, document.getElementById("root"))