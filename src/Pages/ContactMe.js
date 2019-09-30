import React, { Component } from 'react';
import "../Styles/ContactMe.css";
import {LIST_API} from '../Config/coms';
import * as emailjs from 'emailjs-com'

class ContactMe extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    }

    handleChange = ({target}) => {
        console.log('Handle change')
        this.setState({[target.name]: target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
            fetch(`${LIST_API}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            .then(console.log(this.state))
            .then(window.location.reload(false))
        const { address, ...emailInfo } = this.state;
        emailjs.send(
                "training_divanov_gmail_com",
                "template_z7F1EtGq",
                emailInfo,
                "user_m5vbmU8Q6py8GEbcqQyMA"
            )
                
    }

    render() {
        return(
            <div>
                <div className="backGround" />
                <form id="ContactForm" onSubmit={this.handleSubmit}>
                    <input name='firstName' placeholder='First name' onChange={this.handleChange}/>
                    <input name='lastName' placeholder='Last name' onChange={this.handleChange}/>
                    <input name='email' placeholder='email' onChange={this.handleChange}/>
                    <input name='phone' placeholder='Phone' onChange={this.handleChange}/>
                    <input name='address' placeholder='address' onChange={this.handleChange}/>
                    <textarea name='message' id="message" placeholder='Comments ...' onChange={this.handleChange}></textarea>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactMe;