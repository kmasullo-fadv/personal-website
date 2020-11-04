import React, {Component} from "react";
import "./Contact.css"

export default class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <form action="https://formspree.io/xvowbnak" method="post">
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
}