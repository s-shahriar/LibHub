import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <>
      <style>
        {`
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 24px;
            color: white;
          }
          .slide-text {
            margin-bottom: 10px;
          }
          .additional-btn {
            background-color: #ffffff;
            color: #0f172b;
          }
        `}
      </style>


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 lg:h-[30rem] xl:h-[36rem]"
      >
        <div className="swiper-pagination flex justify-center mb-4"></div>
        <SwiperSlide>
          <img
            src={"https://i.ibb.co/64rPT2q/image-2024-05-11-121003133.png"}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-blue-500 uppercase mb-4 font-bold slide-text">
                Enlightening Pages
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Discover the World's Most <br /> Illuminating Literary Treasures
              </h1>
              <div className="flex justify-center my-6">
                <Link to={"/all-books"} className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 !border-0 outline-0">
                  Book List
                </Link>
                <Link
                  to={"/all-books"}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Browse By Category
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://i.ibb.co/CPmT3nY/image.png"}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-blue-500 uppercase mb-4 font-bold slide-text">
                Wisdom-Filled Getaways
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Experience Unmatched <br /> Insight and Inspiration
              </h1>
              <div className="flex justify-center my-6">
                <Link to={"/all-books"} className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 !border-0 outline-0">
                  Book List
                </Link>
                <Link
                  to={"/all-books"}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Browse By Category
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WDcdW7F/image.png"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-blue-500 uppercase mb-4 font-bold slide-text">
                Enlightening Pages
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Discover the World's Most <br /> Illuminating Literary Treasures
              </h1>
              <div className="flex justify-center my-6">
                <Link to={"/all-books"} className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 !border-0 outline-0">
                  Book List
                </Link>
                <Link
                  to={"/all-books"}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Browse By Category
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

