import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../../data/slides";

import { SlideContent } from "./SlideContent";

import "./Cases.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

const Cases = () => {
  return (
    <section id="cases" className="section-cases">
      <h2 className="section-title">Successful cases of our company</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              `<span class="${currentClass}">0</span>` +
              `<span class="separator">/</span>` +
              `<span class="${totalClass}">0</span>`
            );
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination, Keyboard, Navigation]}
        autoHeight={true}
        className="mySwiper"
      >
        <div className="swiper-button-next">
          <GoArrowRight />
        </div>
        <div className="swiper-button-prev">
          <GoArrowLeft />
        </div>

        {data.map(({ id, image, title, text, date }) => (
          <SwiperSlide key={id}>
            <SlideContent
              id={id}
              image={image}
              title={title}
              text={text}
              date={date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Cases;
