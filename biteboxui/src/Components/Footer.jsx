import { useState } from "react";
import "./Footer.css";
import axios from "axios";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setMessage("Email is required.");
      setIsSuccess(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

try {

  const response = await axios.post(
    "http://localhost:11000/Newsletter",
    {
      email,
    }
  );

  setMessage(response.data.message);
  setIsSuccess(true);

  setEmail("");

} catch (err) {

  setMessage("Subscription Failed");
  setIsSuccess(false);

}
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <h2>Bite<span>Box</span></h2>

          <p>
            Experience luxury dining with unforgettable flavors,
            premium ambiance and world-class hospitality.
          </p>
        </div>

        {/* Footer Cards */}
        <div className="footer-grid">

          <div className="footer-card">
            <FaMapMarkerAlt className="footer-icon" />
            <h3>Address</h3>
            <p>
              123 Food Street <br />
              Chennai, Tamil Nadu
            </p>
          </div>

          <div className="footer-card">
            <FaPhoneAlt className="footer-icon" />
            <h3>Contact</h3>
            <p>
              +91 98765 43210 <br />
              bitebox@gmail.com
            </p>
          </div>

          <div className="footer-card">
            <FaClock className="footer-icon" />
            <h3>Opening Hours</h3>
            <p>
              Mon - Sat : 10 AM - 11 PM <br />
              Sunday : 11 AM - 10 PM
            </p>
          </div>

          <div className="footer-card">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="newsletter">

          <h2>Subscribe Newsletter</h2>

          <p>
            Get exclusive offers and latest updates directly in your inbox.
          </p>

          <form
            className="newsletter-box"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
            />

            <button type="submit">
              Subscribe
              <FaPaperPlane />
            </button>
          </form>

          {message && (
            <p
              className={isSuccess ? "success-message" : "error-message"}
            >
              {message}
            </p>
          )}

        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            © 2026 <span>BiteBox</span>. All Rights Reserved.
          </p>

          <h4>
            Designed & Developed by <span>CodeCrackers</span>
          </h4>
        </div>

      </div>
    </footer>
  );
}

export default Footer;