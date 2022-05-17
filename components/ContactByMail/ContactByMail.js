import React, { useState } from "react";
import classes from "./ContactByMail.module.scss";
import { init } from "emailjs-com";
import Image from "next/image";

init("user_plJ83cr8Q69jbT5AyL78k");

const SERVICE_ID = "service_xexguun";
const TEMPLATE_ID = "template_kzphnpe";
const USER_ID = "user_plJ83cr8Q69jbT5AyL78k";

const ContactByMail = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    if (name && message && phone && email) {
      var data = {
        name,
        phone,
        email,
        message,
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
        function (response) {
          console.log(response.status, response.text);
        },
        function (err) {
          console.log(err);
        }
      );
    }
  }

  return (
    <div>
      <br />
      <div>
        <header>
          <form className={classes.contactForm} autoComplete="off">
            <div className={classes.formContent}>
              <input
                type="text"
                className={classes.name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom *"
                value={name}
                autoComplete="off"
              />

              <input
                type="text"
                className={classes.phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Votre téléphone*"
                value={phone}
                autoComplete="off"
              />

              <input
                type="mail"
                className={classes.email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email *"
                value={email}
                autoComplete="off"
              />
              <textarea
                className={`${classes.message} ${classes.textarea}`}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message *"
                value={message}
              />
              <button
                className={classes.buttonContact}
                type="submit"
                onClick={handleClick}
              >
                Envoyer votre message
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
};

export default ContactByMail;
/* 


 */
