import React from "react";
import "./Contact.css";
import Form from "../components/Form";
import Section from "../components/Section";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-page-container">
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
