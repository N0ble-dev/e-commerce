import { useState, useEffect } from "react";
import Title from "../../title/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "../../cart/Cart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";

const Today = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Aug 16, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-[100px]">
          <Title title={"Today's"} titleDsc={"Flash Sales"} />
          <div className="countDown self-end">
            <div className="expireTime flex items-center gap-2 md:gap-4">
              <div className="text-center">
                <span className="text-[12px] font-medium">days</span>
                <p className="text-[24px] md:text-[32px] font-bold">{days}</p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">hours</span>
                <p className="text-[24px] md:text-[32px] font-bold">{hours}</p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">minutes</span>
                <p className="text-[24px] md:text-[32px] font-bold">
                  {minutes}
                </p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">seconds</span>
                <p className="text-[24px] md:text-[32px] font-bold">
                  {seconds}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end">
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="swiper-button-prev-custom cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next-custom cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="product my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cart
              image={"images/product/g92-2-500x500 1.png"}
              discount={"-30%"}
              dsc={"HAVIT HV-G92 Gamepad"}
              price={"$120"}
              oldPrice={"$160"}
              num={"(65)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/ak-900-01-500x500 1.png"}
              discount={"-35%"}
              dsc={"AK-900 Wired Keyboard"}
              price={"$960"}
              oldPrice={"$1160"}
              num={"(65)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/g27cq4-500x500 1.png"}
              discount={"-30%"}
              dsc={"IPS LCD Gaming Monitor"}
              price={"$370"}
              oldPrice={"$400"}
              num={"(26)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
              }
              discount={"-30%"}
              dsc={"S-Series Comfort Chair "}
              price={"$375"}
              oldPrice={"$400"}
              num={"(32)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/g27cq4-500x500 1.png"}
              discount={"-30%"}
              dsc={"IPS LCD Gaming Monitor"}
              price={"$370"}
              oldPrice={"$400"}
              num={"(64)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
              }
              discount={"-30%"}
              dsc={"S-Series Comfort Chair "}
              price={"$375"}
              oldPrice={"$400"}
              num={"(25)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
              }
              discount={"-30%"}
              dsc={"S-Series Comfort Chair "}
              price={"$375"}
              oldPrice={"$400"}
              num={"(25)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
              }
              discount={"-30%"}
              dsc={"S-Series Comfort Chair "}
              price={"$375"}
              oldPrice={"$400"}
              num={"(53)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
              }
              discount={"-30%"}
              dsc={"S-Series Comfort Chair "}
              price={"$375"}
              oldPrice={"$400"}
              num={"(35)"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="bg-[#DB4444] py-[16px] px-[48px] block mx-auto mb-10 rounded-sm text-white">
        View All Products
      </button>
      <hr />
    </div>
  );
};

export default Today;
