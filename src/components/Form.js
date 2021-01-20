import React from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import { Button } from "@material-ui/core";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_k0nvurp",
      "template_eykt38j",
      e.target,
      "user_EYRy2r1PEOjyYt65JUPI1"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Form() {
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h1 className="form-header">Contact</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Contact Number</label>
      <input type="text" name="user_number" />
      <label>Message</label>
      <textarea name="message" />
      <Button
        className="form-button"
        variant="contained"
        type="submit"
        value="Send"
        color="inherit"
      >
        Send
      </Button>
    </form>
  );
}

export default Form;
