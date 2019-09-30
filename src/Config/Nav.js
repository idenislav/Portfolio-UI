import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';
import '../Styles/Navbar.css'

class NavLine extends Component {
    render() {
    return(
        <div>
           
                <nav>
                    <div id="container">
                    <div>
                        <Link id="navwords" to='/'>Home</Link>
                        <Link id="navwords" to='/Projects'>Projects</Link>
                        <Link id="navwords" to='/AboutMe'>About Me</Link>
                        <Link id="navwords" to='/ContactMe'>Contact Me</Link>
                    </div>
                    <h1 className="myName">
                        Denislav Ivanov   
                    </h1>
                    <p className="APD">
                        A passionate developer
                    </p>
                    
                    </div>
                </nav>
        
        </div>
    )
    }
}

export default NavLine;