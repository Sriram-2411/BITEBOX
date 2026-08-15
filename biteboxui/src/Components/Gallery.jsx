import "./Gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <div className="section-title">
        <span>Gallery</span>
        <h2>
          Check Our <span>Gallery</span>
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
        coverflowEffect={{
          rotate:20,
          stretch:0,
          depth:250,
          modifier:1,
          slideShadows:false,
          scale:0.9
        }}
        pagination={{ clickable:true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="gallerySwiper"
      >

        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Gallery;