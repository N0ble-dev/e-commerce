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

const OurProducts = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <Title title={"Our Products"} titleDsc={"Explore Our Products"} />
        <div className="self-end">
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="swiper-button-prev-custom-ourProducts cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next-custom-ourProducts cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-ourProducts",
            prevEl: ".swiper-button-prev-custom-ourProducts",
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
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cart
              image={"images/product/71RdoeXxtrL 1.png"}
              dsc={"Breed Dry Dog Food"}
              price={"$100"}
              num={"(23)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/eos-250d-03-500x500 1.png"}
              dsc={"CANON EOS DSLR Camera"}
              price={"$360"}
              num={"(46)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/ideapad-gaming-3i-01-500x500 1.png"}
              dsc={"ASUS FHD Gaming Laptop"}
              price={"$700"}
              num={"(45)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/curology-j7pKVQrTUsM-unsplash 1.png"}
              dsc={"Curology Product Set "}
              price={"$500"}
              num={"(56)"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-ourProducts",
            prevEl: ".swiper-button-prev-custom-ourProducts",
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
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cart
              image={
                "images/product/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png"
              }
              discount={"NEW"}
              dsc={"Kids Electric Car"}
              price={"$960"}
              num={"(44)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/Copa_Sense 1.png"}
              dsc={"Jr. Zoom Soccer Cleats"}
              price={"$1160"}
              num={"(67)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/GP11_PRD3 1.png"}
              discount={"NEW"}
              dsc={"GP11 Shooter USB Gamepad"}
              price={"$660"}
              num={"(75)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"
              }
              dsc={"Quilted Satin Jacket"}
              price={"$660"}
              num={"(46)"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="bg-[#DB4444] py-[16px] px-[48px] block mx-auto m-10 rounded-sm text-white">
        View All Products
      </button>
    </div>
  );
};

export default OurProducts;
