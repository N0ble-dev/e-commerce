import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import { AboutWrap } from "./About.style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules

const OurStory = () => {
  return (
    <AboutWrap className="my-14">
      <div className="text-[14px] flex items-center gap-2 mb-14">
        <span className="text-gray-400">Home</span>
        <span>/</span>
        <span>About</span>
      </div>
      <div className="flex flex-col justify-between lg:flex-row items-center my-12 gap-10">
        <div className="flex flex-1 flex-col max-w-[520px] lg:w-1/2">
          <h2 className="text-[54px] font-semibold mb-8">Our Story</h2>
          <p className="leading-6 mb-7">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="leading-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="img w-full lg:w-1/2">
          <img src="images/SideAboutImage2.png" alt="Side" className="w-full" />
        </div>
      </div>
      <div>
        <div className="services my-[100px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="service flex items-center justify-center flex-col border-[1px] border-gray-300 rounded p-7">
            <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
              <img src="images/icon_shop.png" alt="" />
            </div>
            <h4 className="mt-[20px] mb-[5px] text-[32px] font-[700]">10.5k</h4>
            <p>Sallers active our site</p>
          </div>
          <div className="service active flex items-center justify-center flex-col border-[1px] border-gray-300 rounded p-7">
            <div className="imgContainer w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
              <img src="images/Icon-Sale.png" alt="" />
            </div>
            <h4 className="mt-[20px] mb-[5px] text-[32px] font-[700]">33k</h4>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div className="service flex items-center justify-center flex-col border-[1px] border-gray-300 rounded p-7">
            <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
              <img src="images/Icon-Shopping bag.png" alt="" />
            </div>
            <h4 className="mt-[20px] mb-[5px] text-[32px] font-[700]">45.5k</h4>
            <p>Customer active in our site</p>
          </div>
          <div className="service flex items-center justify-center flex-col border-[1px] border-gray-300 rounded p-7">
            <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
              <img src="images/Icon-Moneybag.png" alt="" />
            </div>
            <h4 className="mt-[20px] mb-[5px] text-[32px] font-[700]">25k</h4>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            // 1024: {
            //   slidesPerView: 4,
            // },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full">
              <div className="h-[430px] bg-[#F5F5F5] rounded flex items-center justify-center pt-9">
                <img src="images/image 46.png" alt="" className="h-full" />
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <h3 className="text-[32px] font-semibold">Tom Cruise</h3>
                <span>Founder & Chairman</span>
                <div className="social flex items-center gap-6">
                  <a className="text-[20px]" href="/">
                    <CiTwitter />
                  </a>
                  <a className="text-[20px]" href="/">
                    <FaInstagram />
                  </a>
                  <a className="text-[20px]" href="/">
                    <CiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className="h-[430px] bg-[#F5F5F5] rounded flex items-center justify-center pt-9">
                <img src="images/image 51.png" alt="" className="h-full" />
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <h3 className="text-[32px] font-semibold">Tom Cruise</h3>
                <span>Founder & Chairman</span>
                <div className="social flex items-center gap-6">
                  <a className="text-[20px]" href="/">
                    <CiTwitter />
                  </a>
                  <a className="text-[20px]" href="/">
                    <FaInstagram />
                  </a>
                  <a className="text-[20px]" href="/">
                    <CiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className="h-[430px] bg-[#F5F5F5] rounded flex items-center justify-center pt-9">
                <img src="images/image 47.png" alt="" className="h-full" />
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <h3 className="text-[32px] font-semibold">Tom Cruise</h3>
                <span>Founder & Chairman</span>
                <div className="social flex items-center gap-6">
                  <a className="text-[20px]" href="/">
                    <CiTwitter />
                  </a>
                  <a className="text-[20px]" href="/">
                    <FaInstagram />
                  </a>
                  <a className="text-[20px]" href="/">
                    <CiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="services mt-[150px] my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src="images/icon-delivery.png" alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            FREE AND FAST DELIVERY
          </h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src="images/Icon-Customer service.png" alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            FREE AND FAST DELIVERY
          </h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src="images/Icon-secure.png" alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            FREE AND FAST DELIVERY
          </h4>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>
    </AboutWrap>
  );
};

export default OurStory;
