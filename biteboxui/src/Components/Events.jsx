import "./Events.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

import { NavLink } from "react-router-dom";

function Events() {
  return (
    <section className="events">

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay:4000,
          disableOnInteraction:false
        }}
        pagination={{
          clickable:true
        }}
        className="eventSwiper"
      >

        {/* Slide 1 */}

        <SwiperSlide>

          <div
            className="event-slide"
            style={{ backgroundImage: `url(${event1})` }}
          >

            <div className="event-overlay"></div>

            <div className="event-content">

              <span>Luxury Celebration</span>

              <h2>Birthday Party</h2>

              <h3>₹ 4,999</h3>

              <p>
                Celebrate unforgettable birthdays with premium dining,
                elegant ambience, live music and personalized service.
              </p>

<NavLink to="/booking" className="book-btn">
  Book a Table
</NavLink>

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>

          <div
            className="event-slide"
            style={{ backgroundImage: `url(${event2})` }}
          >

            <div className="event-overlay"></div>

            <div className="event-content">

              <span>Exclusive Event</span>

              <h2>Private Party</h2>

              <h3>₹ 2,999</h3>

              <p>
                Perfect venue for family gatherings, anniversaries
                and unforgettable celebrations.
              </p>

<NavLink to="/booking" className="book-btn">
  Book a Table
</NavLink>

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 3 */}

        <SwiperSlide>

          <div
            className="event-slide"
            style={{ backgroundImage: `url(${event3})` }}
          >

            <div className="event-overlay"></div>

            <div className="event-content">

              <span>Premium Dining</span>

              <h2>Wedding Dinner</h2>

              <h3>₹ 9,999</h3>

              <p>
                Luxury wedding dinners with customized menus,
                elegant decoration and five-star hospitality.
              </p>

<NavLink to="/booking" className="book-btn">
  Book a Table
</NavLink>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Events;