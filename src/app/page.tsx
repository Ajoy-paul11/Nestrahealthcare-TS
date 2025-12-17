"use client";
import Herosection from "../../components/heroSection";
import AboutSection from "../../components/aboutSection";
import MarqueeSection from "../../components/marqueeSection";

import VideoSection from "../../components/videoSection";
import ReviewsCarousel from "../../components/reviewsCarousel";
import DoctorPreview from "../../components/doctorPreview";
import { IconMessage } from "@tabler/icons-react";
import { useState } from "react";
import LeadForm from "../../components/leadForm";
import ServicePreview from "../../components/servicePreview";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const openContactForm = () => {
    setOpenForm((prev) => !prev);
  };

  return (
    // <section>
    //   <Herosection />
    //   <ServicePreview />
    //   <AboutSection />
    //   <MarqueeSection />
    //   <VideoSection />
    //   {/* <DoctorPreview /> */}
    //   {/* <ReviewsCarousel /> */}
    //   <button
    //     onClick={openContactForm}
    //     className=" fixed right-3 bottom-3 z-50 w-10 lg:w-12 h-10 lg:h-12 rounded-full green-shade-bg cursor-pointer"
    //   >
    //     <IconMessage className=" mx-auto w-6 h-6 lg:w-8 lg:h-8 text-white-background" stroke={1}/>
    //   </button>
    //   {openForm && (
    //     <div className=" fixed inset-0 z-100 backdrop-blur-xs">
    //         <LeadForm setOpenLeadForm={setOpenForm} />

    //     </div>
    //   )}
    // </section>
    <section className=" h-screen w-full flex justify-center items-center">
      <h1 className=" text-3xl">We'll be back soon</h1>
    </section>
  );
}
