import React, { useState } from "react";
import {Helmet} from "react-helmet";

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {fname, lname, email, phone, message,} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/grv080/google_sheets/EyPIjqWfOAOXnqyq?tabId=Feedback",
                {
                    method: "post",
                    body: JSON.stringify([[fname, lname, email, phone, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
      <div className="main-content-wrapper">
       <Helmet>
                <title>Contact Us | Cretic Solutions</title>
                <link rel="canonical" href="http://creticweb.tech/contact-us" />
            </Helmet>
        {/* STUNNING HEADER */}
        <section className="crumina-stunning-header section-image-bg-moon">
          <div className="container">
            {/* STUNNING HEADER CONTENT */}
            <div className="stunning-header-content align-center">
              {/* PAGE TITLE */}
              <h1 className="page-title text-white">Contact Us</h1>
              {/* /PAGE TITLE */}
              {/* BREADCRUMBS */}
              <div className="crumina-breadcrumbs">
                {/* BREADCRUMBS LIST */}
                <ul className="breadcrumbs">
                  {/* BREADCRUMBS ITEM */}
                  <li className="breadcrumbs-item">
                    <a href="/">Home</a>
                  </li>
                  {/* /BREADCRUMBS ITEM */}
                  {/* BREADCRUMBS ITEM */}
                  <li className="breadcrumbs-item trail-end">
                    <span className="crumina-icon">»</span>
                    <span>Contact Us</span>
                  </li>
                  {/* /BREADCRUMBS ITEM */}
                </ul>
                {/* /BREADCRUMBS LIST */}
              </div>
              {/* /BREADCRUMBS */}
            </div>
            {/* /STUNNING HEADER CONTENT */}
          </div>
        </section>
        {/* /STUNNING HEADER */}
        <section className="large-padding section-image-bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <header className="crumina-module crumina-heading">
                  <div className="title-text-wrap">
                    {/* CRUMINA HEADING TITLE */}
                    <h2 className="heading-title">Have Any Questions?</h2>
                    {/* /CRUMINA HEADING TITLE */}
                  </div>
                  {/* CRUMINA HEADING DECORATION */}
                  <div className="heading-decoration" />
                  {/* /CRUMINA HEADING DECORATION  */}
                  {/* CRUMINA HEADING TEXT */}
                  <div className="heading-text">Please contact us using the form and we’ll get back to you as soon as possible.</div>
                  {/* /CRUMINA HEADING TEXT */}
                </header>
                <form 
                className="send-message-form crumina-submit mt-5"
                data-nonce="crumina-submit-form-nonce" 
                data-type="standard" 
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-item">
                        <input 
                        className="input--white" 
                        name="fname" 
                        type="text" 
                        placeholder="First Name" 
                        required
                        onChange={handleInput}
                        />
                      </div>
                      <div className="form-item">
                        <input 
                        className="input--white" 
                        name="lname" 
                        type="text"
                        placeholder="Last Name" 
                        required
                        onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-item">
                        <input 
                        className="input--white" 
                        name="email" type="email" 
                        placeholder="Email" required
                        onChange={handleInput}
                        />
                      </div>
                      <div className="form-item">
                        <input 
                        className="input--white" 
                        name="phone" 
                        type="text" placeholder="Phone Number" 
                        required 
                        onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-item">
                        <textarea 
                        className="input--white" 
                        name="message" placeholder="Details" rows={3} 
                        required
                        defaultValue={""}
                        onChange={handleInput}/>
                      </div>
                      <div className="inquiry-btn-wrap">
                        <button className="crumina-button button--green button--l" type="submit" value="Send">SEND INQUIRY</button>
                          {message}
                        <span>Please, let us know any particular things to check and the best time to contact you by phone (if provided).</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      <div>
        <section className="large-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <header className="crumina-module crumina-heading">
                  <div className="title-text-wrap">
                    {/* CRUMINA HEADING TITLE */}
                    <h2 className="heading-title">Get In Touch</h2>
                    {/* /CRUMINA HEADING TITLE */}
                  </div>
                  {/* CRUMINA HEADING DECORATION */}
                  <div className="heading-decoration" />
                  {/* /CRUMINA HEADING DECORATION  */}
                  {/* CRUMINA HEADING TEXT */}
                  <div className="heading-text"><span>COVID-19 Note : </span>Please expect delays from government side in case of any registration.</div>
                  {/* /CRUMINA HEADING TEXT */}
                </header>
              </div>
            </div>
          </div>
        </section>
        <div className="medium-padding section-image-bg-dark">
          <div className="container">
            {/* CONTACTS */}
            <div className="contacts">
              {/* CONTACTS ITEM */}
              <div className="contacts-item">
                <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon4.svg" alt="phone" />
                <div className="content">
                  <div className="title c-white">+91 9647540052</div>
                  <p className="sub-title c-white">Mon-Sat 9am-8pm</p>
                </div>
              </div>
              {/* /CONTACTS ITEM */}
              {/* CONTACTS ITEM */}
              <div className="contacts-item">
                <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon5.svg" alt="mail" />
                <div className="content">
                  <a href="mailto: creticweb@gmail.com" className="title c-white">creticweb@gmail.com</a>
                  <p className="sub-title c-white">online support</p>
                </div>
              </div>
              {/* /CONTACTS ITEM */}
              {/* CONTACTS ITEM */}
              <div className="contacts-item">
                <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon6.svg" alt="location" />
                <div className="content">
                  <div className="title c-white">SN Dey Road , Habra</div>
                  <p className="sub-title c-white">West Bengal , India 743263</p>
                </div>
              </div>
              {/* /CONTACTS ITEM */}
            </div>
            {/* /CONTACTS */}
          </div>
        </div>
      </div>
      </div>
    );
}