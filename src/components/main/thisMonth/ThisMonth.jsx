import Title from "../../title/Title";
import Cart from "../../cart/Cart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";

const ThisMonth = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <Title title={"This Month"} titleDsc={"Best Selling Products"} />
        <div className="self-end">
          <button className="bg-[#DB4444] py-[16px] px-[48px] rounded-sm text-white">
            View All
          </button>
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
                "images/product/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
              }
              dsc={"The north coat"}
              price={"$260"}
              oldPrice={"$360"}
              num={"(23)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
              }
              dsc={"Gucci duffle bag"}
              price={"$960"}
              oldPrice={"$1160"}
              num={"(35)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={"images/product/gammaxx-l240-argb-1-500x500 1.png"}
              dsc={"RGB liquid CPU Cooler"}
              price={"$160"}
              oldPrice={"$170"}
              num={"(56)"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cart
              image={
                "images/product/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png"
              }
              dsc={"Small BookSelf"}
              price={"$360"}
              num={"(43)"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ThisMonth;
