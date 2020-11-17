import React, {Component} from 'react'

export default class MusContact extends Component {


    renderForm = () => {
        return (
            <div className="MusContact">
                <form action="https://formspree.io/xvowbnak" method="post" onSubmit={this.handleSubmit}>
                    <h2>Get in touch!</h2>
                    <p>Leave a message here and I will typically get back to you within a day.</p>
                    <label htmlFor="user-name">Name:</label><br/>
                    <input id="user-name" type="text" name="name" required /><br/>

                    <label htmlFor="user-email">Email:</label><br/>
                    <input id="user-email" type="text" name="email" required /><br/>

                    <label htmlFor="user-message">Message:</label><br/>
                    <textarea id="user-message" name="message" required /><br/>
                    <button type="submit">Submit</button>
                    <p>You may also feel free to email me at k@kameronmasullo.com</p>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div className="musContact">
                {this.renderForm()}
            </div>
        )
    }
}