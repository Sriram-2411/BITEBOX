import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [data, setData] = useState({
    uname: "",
    uemail: "",
    usubject: "",
    umessage: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!data.uname.trim()) {
      newErrors.uname = "Name is required";
    }

    if (!data.uemail.trim()) {
      newErrors.uemail = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.uemail)
    ) {
      newErrors.uemail = "Invalid email address";
    }

    if (!data.usubject.trim()) {
      newErrors.usubject = "Subject is required";
    }

    if (!data.umessage.trim()) {
      newErrors.umessage = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submit =  async (e) => {
    e.preventDefault();

    if (validate()) {
     try {

  const response = await axios.post(
    "http://localhost:11000/Contacts",
    data
  );

  alert(response.data.message);

  setData({
    uname: "",
    uemail: "",
    usubject: "",
    umessage: "",
  });

  setErrors({});

} catch (error) {

  console.log(error);

  alert("Message Sending Failed");

}

      setData({
        uname: "",
        uemail: "",
        usubject: "",
        umessage: "",
      });

      setErrors({});
    }
  };

  return (
    <>
      <div className="sec-tittle">
        <h2>CONTACT</h2>
        <h1>
          Need Help? <span>Contact Us</span>
        </h1>
      </div>

      <div className="contact-page">
        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=40.703883,-74.008188&z=14&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="info-grid">
          <div className="info-card">
            <div className="icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">📞</div>
            <div>
              <h5>Call Us</h5>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">🕒</div>
            <div>
              <h2>Opening Hours</h2>
              <p>Mon-Sat: 11AM - 23PM; Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-container">
          <form onSubmit={submit}>
            <div className="row">
              <div>
                <input
                  type="text"
                  name="uname"
                  placeholder="Your Name"
                  value={data.uname}
                  onChange={handleChange}
                />
                {errors.uname && (
                  <p className="error">{errors.uname}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="uemail"
                  placeholder="Your Email"
                  value={data.uemail}
                  onChange={handleChange}
                />
                {errors.uemail && (
                  <p className="error">{errors.uemail}</p>
                )}
              </div>
            </div>

            <input
              type="text"
              name="usubject"
              placeholder="Subject"
              value={data.usubject}
              onChange={handleChange}
            />
            {errors.usubject && (
              <p className="error">{errors.usubject}</p>
            )}

            <textarea
              rows="8"
              name="umessage"
              placeholder="Message"
              value={data.umessage}
              onChange={handleChange}
            ></textarea>

            {errors.umessage && (
              <p className="error">{errors.umessage}</p>
            )}

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}