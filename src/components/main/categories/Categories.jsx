import Title from "../../title/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CategoiesWrap } from "./Categories.style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <CategoiesWrap>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <Title title={"Categories"} titleDsc={"Browse By Category"} />
        <div className="self-end">
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="swiper-button-prev-custom-category cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next-custom-category cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="categories my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-category",
            prevEl: ".swiper-button-prev-custom-category",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
            1536: {
              slidesPerView: 7,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-CellPhone.png" alt="" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-Computer.png" alt="" />
              <span>Computers</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-SmartWatch.png" alt="" />
              <span>SmartWatch</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="active w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-Camera.png" alt="" />
              <span>Camera</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-Headphone.png" alt="" />
              <span>HeadPhones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-Gamepad.png" alt="" />
              <span>Gaming</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-CellPhone.png" alt="" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-CellPhone.png" alt="" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full categorie p-[30px] border-[1px] border-[#0000004D] rounded-sm flex flex-col items-center justify-center">
              <img src="images/Category-CellPhone.png" alt="" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <hr />
    </CategoiesWrap>
  );
};

export default Categories;
