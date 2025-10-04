import React, { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  relation: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewsCarousel: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Anjali Sharma",
      relation: "Daughter",
      rating: 5,
      text: "My father has been staying here for the last few months, and the care he receives is truly heartfelt. The staff speaks to him with so much respect and warmth, just like family. I feel relieved knowing he is in safe hands.",
      date: "September 2024",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      relation: "Son",
      rating: 5,
      text: "We admitted our mother here, and she has adjusted so well. The staff is caring and very patient with her needs. The homely food and regular health check-ups give us great peace of mind.",
      date: "August 2024",
    },
    {
      id: 3,
      name: "Priya Nair",
      relation: "Granddaughter",
      rating: 5,
      text: "This place feels more like a family home than a hospital. My grandmother enjoys the bhajan sessions, healthy meals, and the attention she receives from the nurses. We are very happy with the environment.",
      date: "October 2024",
    },
    {
      id: 4,
      name: "Suresh Mehta",
      relation: "Husband",
      rating: 4,
      text: "The campus is neat and well-maintained, and the doctors are very attentive. My wife is receiving good physiotherapy sessions here. I appreciate the care, though I wish visiting hours were a little more flexible.",
      date: "July 2024",
    },
    {
      id: 5,
      name: "Neha Verma",
      relation: "Niece",
      rating: 5,
      text: "From the day of admission till now, the staff has been very cooperative. They update us regularly and treat every resident with affection. It truly feels like they look after each elder as their own family member.",
      date: "September 2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? "text-amber-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-highlight mb-3">
          What Families Say About Us
        </h2>
        <p className="text-base md:text-lg text-accent max-w-2xl mx-auto">
          Trusted care for your loved ones
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl min-h-80">
        <div
          className="flex"
          style={{
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full px-6 py-8 md:px-12 md:py-14 lg:px-16 box-border"
            >
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-5">{renderStars(review.rating)}</div>

                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-7 italic">
                  "{review.text}"
                </p>

                <div className="border-t-2 border-gray-200 pt-6">
                  <p className="text-base md:text-lg font-semibold text-highlight mb-1">
                    {review.name}
                  </p>
                  <p className="text-sm md:text-base text-accent">
                    {review.relation}
                  </p>
                  {/* <p className="text-sm md:text-base text-gray-600">
                    {review.relation} • {review.date}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-gray-100 border-0 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer shadow-lg text-xl md:text-2xl text-gray-700 transition-all duration-200 hover:scale-110 z-10"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          aria-label="Next review"
          className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-gray-100 border-0 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer shadow-lg text-xl md:text-2xl text-gray-700 transition-all duration-200 hover:scale-110 z-10"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2 md:gap-3 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to review ${index + 1}`}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full border-0 cursor-pointer transition-all duration-300 p-0 ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsCarousel;
