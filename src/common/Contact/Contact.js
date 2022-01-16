import React from "react";
import { Modal } from "react-bootstrap";

const Contact = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Get in touch!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{
                <form id="contactForm" action="https://formspree.io/xvowbnak" method="post" onSubmit={null}>
                    <label htmlFor="user-name">Name:</label><br/>
                    <input className="w-100" id="user-name" type="text" name="name" required /><br/>

                    <label className="mt-3" htmlFor="user-email">Email:</label><br/>
                    <input className="w-100" id="user-email" type="text" name="email" required /><br/>

                    <label className="mt-3" htmlFor="user-message">Message:</label><br/>
                    <textarea className="w-100" id="user-message" name="message" required /><br/>
                    <button className="w-100 btn btn-primary mt-3" type="submit">Submit</button>
                </form>
            }</Modal.Body>
            <Modal.Footer><p className="w-100 text-center">You may also email me at k@kameronmasullo.com</p></Modal.Footer>
        </Modal>
    )
}

export default Contact;