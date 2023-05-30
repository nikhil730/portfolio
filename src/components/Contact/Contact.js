import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./Contact.css";
import Swal from "sweetalert2";
import { useState } from "react";
// import "semantic-ui-css/semantic.min.css";

const Contact = () => {
  // const service_id = "service_3k3uivb";
  // const template_id = "template_awaol9e";
  // const user_id = "BLcx0tMOS4oE2a8wG";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (name.length !== 0 && message.length !== 0 && email.length !== 0) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          {
            from_name: name,
            message: message,
            from_email: email,
            reply_to: "nikhilbhalla196@gmail.com",
          },
          process.env.REACT_APP_USER
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
    } else {
      alert("Fill all the details.");
    }
    document.getElementById("form_id").reset();
  };

  return (
    <div className="contact">
      <div className="heading">
        Want to Work/Code together on building great projects?
      </div>
      <form className="form" id="form_id">
        <div className="email">
          <label className="label" for="emailinput">
            Email{" "}
          </label>
          <input
            required
            id="emailinput"
            type="email"
            name="email"
            autocomplete="off"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="name">
          <label className="label" for="nameinput">
            Name{" "}
          </label>
          <input
            required
            id="nameinput"
            type="text"
            name="name"
            autocomplete="off"
            placeholder=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="message">
          <label className="label" for="messageinput">
            Message{" "}
          </label>
          <textarea
            className="msg"
            required
            rows="4"
            cols="50"
            id="messageinput"
            type="text"
            name="message"
            autocomplete="off"
            placeholder="Enter the message here"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button
          onClick={handleOnSubmit}
          className="btn"
          type="submit"
          color="green"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
