"use client";
import Herosection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import MarqueeSection from "../../components/marqueeSection";

import VideoSection from "../../components/videoSection";
import ReviewsCarousel from "../../components/reviewsCarousel";
import DoctorPreview from "../../components/doctorPreview";

export default function Home() {
  return (
    <section>
      <Herosection />
      <AboutSection />
      <MarqueeSection />
      <VideoSection />
      <DoctorPreview />
      <ReviewsCarousel />
    </section>
  );
}
