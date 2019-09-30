import React, { Component } from 'react';
import '../Styles/Home.css'



class Home extends Component {
    render() { 
        return(
            <div>
           
            
            <div className="iconFlex">
                <a target="_blank" href='https://www.linkedin.com/in/denislav-ivanov-880745148/'>
            <div className='linkedInLogo' />
            </a>
                <a target="_blank" href='https://github.com/idenislav'>
            <div className='githubLogo' />
                </a>
            </div>
            
            </div>
        )
    }

}

export default Home;