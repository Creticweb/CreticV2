import React, { useState } from "react";

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
        const {phone, email} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/grv080/google_sheets/EyPIjqWfOAOXnqyq?tabId=Email",
                {
                    method: "post",
                    body: JSON.stringify([[phone, email]]),
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
          	<section class="large-padding-top section-image-bg-black section-anime-js">

		<div class="container">

			<div class="row">
				<div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 m-auto">
					<header class="crumina-module crumina-heading heading--white mb-5 align-center">

						<div class="title-text-wrap">
							<h2 class="heading-title element-anime-fadeInUp-js">CONTACT US</h2>
						</div>

						<div class="heading-text element-anime-fadeInUp-js">Get Free Consultation</div>
						
					</header>
					<form 
					class="seo-score-form mb-5"
					id="contact"
          name="contact"
          required
          onSubmit={sendData}
					>
						<div class="form-inline-inputs-wrap element-anime-fadeInUp-js">
							<input 
							class="input--dark" 
							name="phone" type="tel"
							placeholder="Phone Number"
							required
              onChange={handleInput}
							/>
							<input 
							class="input--dark"
							name="email" 
							type="email" 
							placeholder="Your email address"
							required
              onChange={handleInput}/>
						</div>
						<button 
						class="crumina-button button--primary button--l element-anime-opacity-js"
						name="submit" 
						type="submit" 
						value="Send"
						>SUBMIT</button>
					</form>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 align-center m-auto">
					<img loading="lazy"  src="img/demo-content/icons/06-seo-score.svg" alt="Case" class="element-anime-fadeInUp-js"/>
				</div>
			</div>
		</div>
	</section>
    );
}

