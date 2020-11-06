import React, {Component} from "react";
import "./Contact.css"

export default class Contact extends Component {
    state = {
        isSubmitted: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isSubmitted: true})
    }

    renderForm = () => {
        return (
            <div className="contact">
                <form action="https://formspree.io/xvowbnak" method="post" onSubmit={this.handleSubmit}>
                    <label htmlFor="user-name">Name:</label><br/>
                    <input id="user-name" type="text" name="name" required /><br/>

                    <label htmlFor="user-email">Email:</label><br/>
                    <input id="user-email" type="text" name="email" required /><br/>

                    <label htmlFor="user-message">Message:</label><br/>
                    <textarea id="user-message" name="message" required /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    renderThanks = () => {
        return (
            <h2>Thank you! I'll be in touch soon.</h2>
        )
    }


    render() {
        return (
            <>
            {this.state.isSubmitted ? this.renderThanks() : this.renderForm()}
            </>
        )
    }
}