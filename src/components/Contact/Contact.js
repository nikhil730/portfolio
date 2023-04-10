import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./Contact.css";
import Swal from "sweetalert2";
import { useState } from "react";
// import "semantic-ui-css/semantic.min.css";

const Contact = () => {
  const service_id = "service_3k3uivb";
  const template_id = "template_awaol9e";
  const user_id = "BLcx0tMOS4oE2a8wG";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: name,
          message: message,
          from_email: email,
          reply_to: "nikhilbhalla196@gmail.com",
        },
        user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Contact;
