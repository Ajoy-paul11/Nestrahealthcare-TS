"use client";
import Image from "next/image";
import Herosection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import MarqueeSection from "../../components/marqueeSection";
import Footer from "../../components/Footer";
import VideoSection from "../../components/videoSection";
import ReviewsCarousel from "../../components/reviewsCarousel";



export default function Home() {
  return (
    <section>
      <Herosection />
      <AboutSection />
      <MarqueeSection />
      <VideoSection />
      <ReviewsCarousel />
      <Footer />
    </section>
  );
}
