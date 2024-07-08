import { useState } from "react";
import "../pages/Contact.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
 
  const form = useRef();

  function alert() {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mesaj göndərildi!",
      showConfirmButton: true,
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wi53b5l", "template_tucd0ka", form.current, {
        publicKey: "_Yl36KQzmV4vPiajC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="have_any_request">
          <div className="p_ler">
            <h2 className="have_any">
              Have any queries? Feel free to reach us.
            </h2>
          </div>
        </div>

        <div className="contact_cards">
          <div className="address_email">
            <div className="icon_container">
              <i className="fa-solid fa-headset"></i>
            </div>
            <p className="email_address">BY PHONE</p>
            <p className="office">
              Get telephone support by signing into your account.
            </p>
            <button className="contact_btn">
              <Link to={"/register"}>Log In</Link>
            </button>
          </div>

          <div className="address_email">
            <div className="icon_container">
              <i className="fa-regular fa-folder"></i>
            </div>
            <p className="email_address">START A NEW CASE</p>
            <p className="office">
              Just send us your questions or concerns by starting a new case and
              we will give you the help you need.
            </p>
            <button className="contact_btn">
              <Link to={"/new"}>Start Here</Link>
            </button>
          </div>

          <div className="address_email">
            <div className="icon_container">
              <i className="fa-regular fa-comments"></i>
            </div>
            <p className="email_address">LIVE CHAT</p>
            <p className="office">Chat with a member of our in-house team.</p>
            <button className="contact_btn">
              <Link to={"/yardim"}>Start Chat</Link>
            </button>
          </div>
        </div>

        <div className="maps_container">
          <div className="map_1">
            <p className="heap_office">Head office</p>
            <p className="street_address">Akademik Zahid Xelilov</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5474450382544!2d49.80889017514754!3d40.3745579582063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2zQmFrxLEgRMO2dmzJmXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1saz!2saz!4v1719697358918!5m2!1saz!2saz"
              className="map_1_iframe"
            ></iframe>
          </div>
          <div className="map_1">
            <p className="heap_office">Sales office</p>
            <p className="street_address">Huseyn Cavid Prospekti</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7483178803377!2d49.81287087514728!3d40.37010465847717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1719697580444!5m2!1saz!2saz"
              className="map_1_iframe"
            ></iframe>
          </div>
        </div>
        {/* <div className="contact-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="leave_message">
                <h2 className="leave">Leave a message</h2>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ad"
              />
            </div>

            <div className="form-group">
              <div className="leave_message">
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>


            <div className="form-group">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              />
            </div>
            <button type="submit" className="gonder_btn">
              Submit
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div> */}

        <section className="contact-container">
         
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
            <div className="leave_message">
            <h2 className="leave">Leave a message</h2>
          </div>
              <input type="text" required="" name="user_name" placeholder="Name"/>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="user_email" required="" placeholder="Email"/>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" required="" placeholder="Message"></textarea>
            </div>
            <button type="submit" value={"Send"} className="gonder_btn">
              Göndər
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
