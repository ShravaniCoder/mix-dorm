
const destinations = [
  {
    src: "../../src/assets/Img/Home/India1.png",
    alt: "India",
    country: "India",
    hostels: 252,
  },
  {
    src: "path/to/indonesia-image.jpg",
    alt: "Indonesia",
    country: "Indonesia",
    hostels: 252,
  },
  {
    src: "path/to/thailand-image.jpg",
    alt: "Thailand",
    country: "Thailand",
    hostels: 252,
  },
  {
    src: "path/to/vietnam-image.jpg",
    alt: "Vietnam",
    country: "Vietnam",
    hostels: 252,
  },
  { src: "path/to/usa-image.jpg", alt: "USA", country: "USA", hostels: 252 },
  {
    src: "path/to/turkey-image.jpg",
    alt: "Turkey",
    country: "Turkey",
    hostels: 252,
  },
  { src: "path/to/uae-image.jpg", alt: "UAE", country: "UAE", hostels: 252 },
  // Add more destination objects here as needed...
];

const flags = [
  { src: "../../src/assets/Img/Home/UK.png", alt: "UK" },
  { src: "../../src/assets/Img/Home/India.png", alt: "India" },
  { src: "../../src/assets/Img/Home/Canada.png", alt: "Canada" },
  { src: "../../src/assets/Img/Home/Portugal.png", alt: "Portugal" },
  { src: "../../src/assets/Img/Home/Albania.png", alt: "Albania" },
  { src: "../../src/assets/Img/Home/Algeria.png", alt: "Algeria" },
  { src: "../../src/assets/Img/Home/Angola.png", alt: "Angola" },
  { src: "../../src/assets/Img/Home/fi_197513.png", alt: "fi_197513.png" },
  { src: "../../src/assets/Img/Home/fi_197533.png", alt: "fi_197533.png" }, // 8th flag
  { src: "../../src/assets/Img/Home/Argentina.png", alt: "Argentina" },
  { src: "../../src/assets/Img/Home/fi_197516.png", alt: "fi_197516.png" }, // 10th flag
  { src: "../../src/assets/Img/Home/Australia.png", alt: "Australia" },
  { src: "../../src/assets/Img/Home/Austria.png", alt: "Austria" },
  { src: "../../src/assets/Img/Home/Azerbaijan.png", alt: "Azerbaijan" },
  { src: "../../src/assets/Img/Home/fi_197383.png", alt: "fi_197383.png" },
  { src: "../../src/assets/Img/Home/fi_197384.png", alt: "fi_197384.png" },
];
const Home1 = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-semibold">
          Explore the <span className="text-[#40E0D0]">World</span>
        </h1>
        <p className="py-5 text-black/50">
          With over 16,500 hostels in 180 countries.
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 space-x-4 overflow-scroll">
        {flags.map((flag, index) => (
          <img
            key={index}
            src={flag.src}
            alt={flag.alt}
            className="w-12 h-12 rounded-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {destinations.map((destination, index) => (
          <div key={index} className="relative">
            <img
              src={destination.src}
              alt={destination.alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg">
              <h2 className="text-white text-2xl font-bold">
                {destination.country}
              </h2>
              <p className="text-white text-lg">
                {destination.hostels} Hostels
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home1;
