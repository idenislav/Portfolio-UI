import React, { Component } from 'react';
import '../Styles/Home.css'

class Home extends Component {
    render() { 
        return(
            <div>
            <div className="videowrapper">
            <iframe title="video" src="https://www.youtube.com/embed/xWiKjTPb2m4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="iconsFlex">
                <a target="blank" href='https://www.linkedin.com/in/denislav-ivanov-880745148/'>
            <div className='linkedInLogo' />
            </a>
                <a target="blank" href='https://github.com/idenislav'>
            <div className='githubLogo'/>
                </a>
            </div>
            </div>

            {/* <div className="iconsFlex">
                <a target="_blank" href='https://www.linkedin.com/in/denislav-ivanov-880745148/'>
            <div className='linkedInLogo' />
            </a>
                <a target="_blank" href='https://github.com/idenislav'>
            <div className='githubLogo'/>
                </a>
            </div> */}


            </div>

        )
    }

}

export default Home;