// Contact.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import Map from "./Map";

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setMessage("Message sent successfully ✅");
          setTimeout(() => setMessage(""), 5000);
          e.target.reset();
        },
        () => {
          setMessage("Message not sent (service error) ❌");
        }
      );
  };

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div className="contectCOntainer">
          <h4 className="mainhedingcontect">Contact us today</h4>
          <p className="parcontect">
           
At AKSHAR MARKETING, we are committed to continuous improvement and innovation as markets, products, and technologies evolve. We take pride in delivering cutting-edge solutions that facilitate the successful introduction of products to the market.

Contact us today to discover how AKSHAR MARKETING can empower you to achieve your goals and enhance your operations within government institutions. Our team of experts is ready to collaborate with you to create tailored strategies that drive results.
          </p>
        </div>
        <section className="contact section" id="contact">
          <div className="contact__container grid">
            <div className="contact__data">
              <h2 className="section__title-2">
                <span>Contact Me.</span>
              </h2>
              <p className="contact__description-1">
                I will read all emails. Send me any message you want and I'll
                get back to you.
              </p>
              <p className="contact__description-2">
                I need your <b>Name</b> and <b>Email Address</b>, but you won't
                receive anything other than your reply.
              </p>
              <div className="geometric-box"></div>
            </div>

            <div className="contact__mail">
              <h2 className="contact__title">Send Me A Message</h2>
              <form className="contact__form" onSubmit={sendEmail}>
                <div className="contact__group">
                  <div className="contact__box">
                    <input
                      type="text"
                      name="user_name"
                      className="contact__input"
                      required
                      placeholder="First name"
                    />
                    <label className="contact__label">First Name</label>
                  </div>

                  <div className="contact__box">
                    <input
                      type="email"
                      name="user_email"
                      className="contact__input"
                      required
                      placeholder="Email Address"
                    />
                    <label className="contact__label">Email Address</label>
                  </div>
                </div>

                <div className="contact__box">
                  <input
                    type="text"
                    name="user_subject"
                    className="contact__input"
                    required
                    placeholder="Subject"
                  />
                  <label className="contact__label">Subject</label>
                </div>

                <div className="contact__box contact__area">
                  <textarea
                    name="user_message"
                    className="contact__input"
                    required
                    placeholder="Message"
                  ></textarea>
                  <label className="contact__label">Message</label>
                </div>

                <p className="contact__message">{message}</p>

                <button type="submit" className="contact__button button">
                  <i className="ri-send-plane-line"></i> Send Message
                </button>
              </form>
            </div>
          </div>
          <div id="mapcontact">
            <Map />
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Contact;
