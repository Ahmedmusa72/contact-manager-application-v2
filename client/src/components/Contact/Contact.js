import React from "react";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
<div className="wrapper">
    <h1>Contact Us</h1>
</div>
      
      <div className="contact_wrapper">
        <ul>
          <h3>Email</h3>

          <h4>imadormusa72@gmail.com</h4>

          <h4>Phone / WhatsApp</h4>
          <h4>+2347061534233/+2349054318670</h4>
          <h4>Social Media</h4>
          <h4>@ImadorGarget on Telegram</h4>
          <h4>@Imador-Garget on Facebook</h4>
          <h4>@Imador-Garget on Twitter</h4>
          <h4>@Imador-Garget on Instagram</h4>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
