import Title from "../../title/Title";

const FeaturedItem = ({ imgSrc, imgAlt, title, description, btnText }) => {
  return (
    <div className="featured-item bg-black relative flex items-center justify-center p-5 rounded-sm">
      <img src={imgSrc} alt={imgAlt} className="self-end" />
      <div className="info absolute left-7 bottom-7 text-white flex flex-col gap-3">
        <h3 className="text-[24px] font-[600]">{title}</h3>
        <p className="text-[14px] font-[400] text-[#FAFAFA]">{description}</p>
        <span className="text-[16px] font-[500]">{btnText}</span>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div>
      <Title title={"Featured"} titleDsc={"New Arrival"} />

      <div className="featured grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <FeaturedItem
          imgSrc="/images/ps5-slim-goedkope-playstation_large 1.png"
          imgAlt="PlayStation 5"
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          btnText="Shop Now"
        />
        <div className="grid grid-cols-1 gap-5">
          <FeaturedItem
            imgSrc="/images/attractive-woman-wearing-hat-posing-black-background 1.png"
            imgAlt="Women’s Collections"
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
            btnText="Shop Now"
          />
          <div className="featured grid grid-cols-1 md:grid-cols-2 gap-5">
            <FeaturedItem
              imgSrc="/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
              imgAlt="Speakers"
              title="Speakers"
              description="Amazon wireless speakers"
              btnText="Shop Now"
            />
            <FeaturedItem
              imgSrc="/images/652e82cd70aa6522dd785109a455904c.png"
              imgAlt="Perfume"
              title="Perfume"
              description="GUCCI INTENSE OUD EDP"
              btnText="Shop Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
