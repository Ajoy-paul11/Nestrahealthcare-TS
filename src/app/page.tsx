"use client";
import Image from "next/image";
import Herosection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import MarqueeSection from "../../components/marqueeSection";



export default function Home() {
  return (
    <section>
      <Herosection />
      <AboutSection />
      <MarqueeSection />
    </section>
  );
}
