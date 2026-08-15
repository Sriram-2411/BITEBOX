import "./About.css";

import aboutImg from "../assets/aboutimg1.jpg";
import videoImg from "../assets/Aboutvid.mp4";
import { NavLink } from "react-router-dom";

import {
  FaLeaf,
  FaUtensils,
  FaHeart,
  FaPhoneAlt,
  FaPlay,
  FaUsers,
  FaAward,
  FaConciergeBell
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      {/* Heading */}

      <div className="about-title">

        <span>OUR STORY</span>

        <h2>
          Learn More <span>About Us</span>
        </h2>

        <p>
          We blend passion, creativity and the finest ingredients
          to create unforgettable dining experiences.
        </p>

      </div>

      {/* Main */}

      <div className="about-wrapper">

        {/* LEFT */}

        <div className="left-side">

          <img src={aboutImg} alt="" className="about-image"/>

          <div className="reserve-card">

            <div className="reserve-icon">
              <FaUtensils/>
            </div>

            <div className="reserve-content">

              <h3>Reserve Your Table Today</h3>

              <p>
                Experience delicious food in a warm and friendly atmosphere.
              </p>

            </div>

            <div className="reserve-contact">

              <FaPhoneAlt/>

              <div>

                <small>Call Us</small>

                <h4>+91 98765 43210</h4>

              </div>

            </div>

<NavLink to="/booking" className="book-btn">
  Book a Table
</NavLink>

          </div>

          {/* Stats */}

          <div className="stats">

            <div className="stat">

              <FaUtensils/>

              <h3>12+</h3>

              <p>Years of Experience</p>

            </div>

            <div className="stat">

              <FaUsers/>

              <h3>20K+</h3>

              <p>Happy Customers</p>

            </div>

            <div className="stat">

              <FaConciergeBell/>

              <h3>150+</h3>

              <p>Delicious Dishes</p>

            </div>

            <div className="stat">

              <FaAward/>

              <h3>25+</h3>

              <p>Awards Won</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="right-side">

          <span className="who">
            WHO WE ARE
          </span>

          <h2>

            Crafting Moments,
            <br/>

            <span>Serving Happiness</span>

          </h2>

          <p>

            Every dish is carefully prepared using fresh ingredients,
            authentic recipes and lots of love.

          </p>

          {/* Feature */}

          <div className="feature">

            <div className="feature-icon">
              <FaLeaf/>
            </div>

            <div>

              <h3>Fresh Ingredients</h3>

              <p>
                We use premium quality ingredients every day.
              </p>

            </div>

          </div>

          <div className="feature">

            <div className="feature-icon">
              <FaUtensils/>
            </div>

            <div>

              <h3>Expert Chefs</h3>

              <p>
                Passionate chefs creating unforgettable flavors.
              </p>

            </div>

          </div>

          <div className="feature">

            <div className="feature-icon">
              <FaHeart/>
            </div>

            <div>

              <h3>Made with Love</h3>

              <p>
                Every meal is prepared with care and dedication.
              </p>

            </div>

          </div>

          {/* Video */}

          <div className="video-box">

            <img src={videoImg} alt="" />

            <div className="play">

              <FaPlay/>

            </div>

            <div className="video-text">

              <h3>Watch Our Story</h3>

              <p>
                A journey of passion, flavors and memories.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;