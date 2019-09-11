import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';
import '../Styles/Style.css'

class NavLine extends Component {
    render() {
    return(
        <div>
            <body>
                <nav id='container'>
                    <div id='container'>
                    <div>
                        <Link id="navwords" to='/'>Home</Link>
                   
                        <Link id="navwords" to='/Projects'>Projects</Link>
                    
                        <Link id="navwords" to='/AboutMe'>About Me</Link>
                    
                        <Link id="navwords" to='/ContactMe'>Contact Me</Link>
                    </div>
                    </div>
                </nav>
            </body>
        </div>
    )
    }
}

export default NavLine;