import React, { Component } from "react";
import { Link } from  'react-router-dom';
import '../Styles/Navbar.css'

class NavLine extends Component {
    render() {
    return(
        <div>       
            <nav>
                    <div id="container">
                    <div className='navContainer'>
                        <Link className="navwords" to='/'>Home</Link>
                        <Link className="navwords" to='/projects'>Projects</Link>
                        <Link className="navwords" to='/aboutMe'>About Me</Link>
                        <Link className="navwords" to='/contactMe'>Contact Me</Link>
                        <Link id='resume' className="navwords" to='/resume'>Resume</Link>
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