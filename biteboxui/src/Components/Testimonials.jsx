import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

import person1 from "../assets/testimonials-1.jpg";
import person2 from "../assets/testimonials-2.jpg";
import person3 from "../assets/testimonials-3.jpg";

function Testimonials() {
  return (
    <section className="testimonial">

      {/* Heading */}

      <div className="testimonial-title">

        <span>Testimonials</span>

        <h2>
          What Are They <span>Saying About Us</span>
        </h2>

      </div>

      {/* Slider */}

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="testimonial-slider"
      >

        {/* Slide 1 */}

        <SwiperSlide>

          <div className="testimonial-content">

            <div className="testimonial-left">

              <p>
                "Absolutely loved the food! Every dish was fresh,
                flavorful, and beautifully presented. The service
                was exceptional and the atmosphere was warm and
                welcoming."
              </p>

              <h3>Sarah Wilson</h3>

              <span>Food Blogger</span>

              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

            </div>

            <div className="testimonial-right">

              <img src={person1} alt="customer" />

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>

          <div className="testimonial-content">

            <div className="testimonial-left">

              <p>
                "One of the best restaurants I've ever visited.
                Delicious meals, quick service and friendly staff.
                Highly recommended!"
              </p>

              <h3>John Smith</h3>

              <span>Businessman</span>

              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

            </div>

            <div className="testimonial-right">

              <img src={person2} alt="customer" />

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 3 */}

        <SwiperSlide>

          <div className="testimonial-content">

            <div className="testimonial-left">

              <p>
                "Amazing ambience and premium quality food.
                Every visit becomes a memorable experience.
                Will definitely come again!"
              </p>

              <h3>Emily Davis</h3>

              <span>Chef</span>

              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

            </div>

            <div className="testimonial-right">

              <img src={person3} alt="customer" />

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Testimonials;