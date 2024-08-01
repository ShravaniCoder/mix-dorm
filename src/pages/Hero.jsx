import SearchBar from "../../src/pages/SearchBar";
import HomeImg from "../../src/assets/Img/Home/img1.png";
import Phone from "../../src/assets/Img/Home/iPhone 15.png"

const Hero = () => {
  return (
    <div className="relative h-[78vh] w-full">
      <img src={HomeImg} alt="back" className="h-[78vh] w-full object-cover" />
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="flex w-[100%]">
          <div className="flex flex-col w-[40%]">
            <div className=" text-white xl:pl-[8rem] md:pl-[2rem] md:pt-[4rem]">
              <h1 className="text-3xl font-semibold">50k + </h1>
              <p className="text-4xl font-thin">DOWNLOADER</p>
            </div>
            <div className="text-white md:pl-[12rem] xl:pl-[24rem] md:pt-[3rem] xl:pt-[8rem]">
              <h1 className="text-7xl font-semibold ">SPEND</h1>
              <p className="text-7xl font-semibold float-right">LESS</p>
            </div>
          </div>
          <div className="w-[18%]">
            <img src={Phone} alt="phone" className="h-[70vh] w-auto" />
          </div>
          <div className="w-[40%]">
            <div className=" text-white pt-6">
              <h1 className="text-7xl font-semibold">EXPLORE</h1>
              <p className="text-7xl font-semibold">MORE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  w-full flex justify-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero
