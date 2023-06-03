/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import "./contact.scss";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const card = [
    {
      id: 1,
      title: "Instagram",
      account: "@yourAccount",
      icon: <BsInstagram className="icon" />,
    },
    {
      id: 2,
      title: "Linkedin",
      account: "@yourAccount",
      icon: <BsLinkedin className="icon" />,
    },
  ];
  return (
    <section id="contact" className="contact section container">
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <div className="cards grid">
            {card.map((item) => {
              return (
                <div className="card">
                  <div>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <span className="userName">{item.account}</span>
                  <div>
                    <a href="" className="flex" target="_blank">
                      Mesaj Gönder <TbArrowBigRightLines className="icon" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="form grid">
          <h3>Bana bir e-posta gönder</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Adınızı giriniz" />
            <input
              type="email"
              name="email"
              placeholder="Email adresinizi giriniz"
            />
            <textarea name="message" placeholder="Mesajınızı girinz." />
            <button className="formBtn" type="submit" name="submit">
              Email Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
