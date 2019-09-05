import React, { Component } from 'react';
import "../Styles/ContactMe.css";

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
        this.setState({[target.name]: target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(console.log(this.state))
    }

    render() {
        return(
            <div>
                <form id="ContactForm" onSubmit={this.handleSubmit}>
                    <input name='firstName' placeholder='First name' onChange={this.handleChange}/>
                    <input name='lastName' placeholder='Last name' onChange={this.handleChange}/>
                    <input name='email' placeholder='email' onChange={this.handleChange}/>
                    <input name='phone' placeholder='Phone' onChange={this.handleChange}/>
                    <input name='address' placeholder='address' onChange={this.handleChange}/>
                    <textarea name='message' id="message" placeholder='Comments ...' onChange={this.handleChange}></textarea>

                    <button>Submit </button>
                </form>
            </div>
        )
    }
}

export default ContactMe;