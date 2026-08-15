import "./Hero.css";
import hero from "../assets/hero-img.png";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";
import heroVideo from "../assets/hero-vid.mp4";
import { NavLink } from "react-router-dom";

function Hero() {
    const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          🍴 Premium Restaurant
        </span>

        <h1>
          Taste the <span>Finest</span>
          <br />
          Food Experience
        </h1>

        <p>
          Fresh ingredients, unforgettable flavors, and a dining experience
          crafted with passion. Discover delicious meals made just for you.
        </p>

        <div className="hero-btns">

      <NavLink to="/booking">
        <button className="book-btn">
          Book a Table
        </button>
      </NavLink>

            <button
            className="video-btn"
            onClick={() => setShowVideo(true)}
            >
            <FaPlayCircle />
            Watch Video
            </button>   

        </div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="Food" />
      </div>
{showVideo && (
  <div className="video-modal">

    <div className="video-content">

      <button
        className="close-btn"
        onClick={() => setShowVideo(false)}
      >
        ✖
      </button>

      <video
        width="100%"
        controls
        autoPlay
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>

  </div>
)}
    </section>
  );
}

export default Hero;