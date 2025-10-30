import scrooImg1 from "../public/scroll1.jpg";
import scrollImg2 from "../public/scroll2.jpg";
import scrollImg3 from "../public/scroll3.jpg";

import { useEffect, useState } from "react";

const slides = [
  scrooImg1,
  scrollImg2,
  scrollImg3,
  
];
function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000  ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          > 
            {/* <div className="absolute inset-0 bg-black opacity-25"></div> */}
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      {/* <div
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-[#F7F6F2] z-10"
      >
        <div className="pb-2.5 text-2xl md:text-3xl font-medium capitalize "
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Nestra Health Care
        </div>
        <div className="text-3xl lg:text-5xl font-medium pb-2.5 text-center px-4 capitalize"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Happiness lives here
          <br />
          and so you can
        </div>
      </div> */}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-100 scale-125"
                : "bg-blue-500 hover:bg-blue-200 cursor-pointer"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
