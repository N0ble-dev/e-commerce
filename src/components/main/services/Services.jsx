const Services = () => {
  return (
    <div>
      <div className="services my-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </div>
  );
};

export default Services;
