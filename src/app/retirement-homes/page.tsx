import React from "react";
import {
  IconHome,
  IconShieldCheck,
  IconUsersGroup,
  IconSoup,
  IconHeartbeat,
  IconArrowsExchange,
} from "@tabler/icons-react";
import Link from "next/link";
import image1 from "../../../public/retirement-homes1.jpg";
import image2 from "../../../public/retirement-homes2.jpg";
import type { IconProps } from "@tabler/icons-react";

interface Feature {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

function RetirementHomesPage() {
  const features: Feature[] = [
    {
      icon: IconHome,
      title: "Independent & Maintenance-Free Living",
      description:
        "Residents enjoy private, comfortable living spaces without the stress of household responsibilities. We take care of maintenance, housekeeping, and daily essentials.",
    },
    {
      icon: IconShieldCheck,
      title: "Safe & Secure Senior Living Environment",
      description:
        "Our premises are designed with senior-friendly infrastructure, 24/7 supervision, and emergency response systems to ensure complete peace of mind for residents and families.",
    },
    {
      icon: IconUsersGroup,
      title: "Vibrant Community & Social Engagement",
      description:
        "We encourage meaningful interactions through group activities, wellness sessions, hobby programs, and social gatherings — fostering belonging and companionship.",
    },
    {
      icon: IconSoup,
      title: "Nutritious Meals & Daily Support Services",
      description:
        "Wholesome, balanced meals tailored to senior dietary needs, along with housekeeping and assistance when required.",
    },
    {
      icon: IconHeartbeat,
      title: "Access to Healthcare & Wellness Monitoring",
      description:
        "Regular health check-ups, medical coordination, and easy access to professional care ensure residents feel secure at all times.",
    },
    {
      icon: IconArrowsExchange,
      title: "Seamless Transition to Assisted Care",
      description:
        "Should care needs change, residents can smoothly transition to higher levels of support within Nestra Healthcare..",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Retirement Homes in Bangalore
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Independent Senior Living with Comfort, Community & Care
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className=" relative flex flex-col xl:flex-row items-center gap-6 bg-white">
        <div className=" relative w-full overflow-hidden ">
          <img
            src={image1.src}
            alt="Assisted Living"
            className="w-full h-67.5 lg:h-112.5 object-cover bg-center "
          />
          <div className="hidden xl:block absolute inset-0 from-80% from-transparent to-100% to-white bg-linear-to-r"></div>
        </div>
        <div className="max-w-1/2 mx-auto text-center px-2 md:px-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
            What Are Retirement Homes?
          </h2>
          <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
            Retirement Homes are residential communities created for active and
            independent seniors who prefer a secure, socially engaging, and
            maintenance-free lifestyle. Unlike traditional homes, retirement
            communities offer built-in safety, convenience, and access to
            healthcare support.
            <br />
            At Nestra Healthcare, our retirement homes in Bangalore focus on
            preserving independence while providing reassurance through
            professional care and a compassionate environment. It is senior
            living designed around comfort, respect, and community — allowing
            elders to live life on their own terms.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-4">
              Key Features of Nestra Retirement Homes
            </h2>
            <p className="text-sm lg:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive care designed around your loved one's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className=" flex items-center justify-center gap-4 md:gap-6 ">
                    <div className=" shrink-0">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#d75fa4] rounded-full flex items-center justify-center mb-6">
                        <Icon className="text-white w-5 h-5 md:w-8 md:h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#d75fa4] mb-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What is Assisted Living Section */}
      <section className=" relative flex flex-col xl:flex-row items-center gap-6 bg-white">
        <div className="max-w-1/2 mx-auto text-center px-2 md:px-6">
          {/* <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
            Introduction
          </h2> */}
          <div className="space-y-4 text-sm lg:text-lg text-gray-700 leading-relaxed">
            <p>
              At Nestra Healthcare, our Retirement Homes in Bangalore are
              designed for seniors who wish to embrace an independent,
              fulfilling lifestyle in a safe and supportive environment.
              Retirement should be a time of relaxation, connection, and
              personal freedom — not worry about daily chores or home
              maintenance.
            </p>
            <p>
              Our senior living community blends comfort, companionship, and
              professional support, ensuring every resident feels secure,
              valued, and truly at home. With thoughtfully designed spaces and a
              warm community atmosphere, Nestra offers a peaceful setting where
              seniors can enjoy their golden years with dignity and confidence.
              If you are searching for trusted and comfortable{" "}
              <strong>senior living in Bangalore</strong>, Nestra Retirement
              Homes provide the perfect balance of independence and reassurance.
            </p>
          </div>
        </div>
        <div className=" relative w-full overflow-hidden ">
          <img
            src={image2.src}
            alt="Assisted Living"
            className="w-full h-75 lg:h-125 object-cover bg-center "
          />
          <div className="hidden xl:block absolute inset-0 from-0% from-white to-25% to-transparent bg-linear-to-r"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#025F67] to-[#2F9D94]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Learn More?
          </h2>
          <p className="text-sm lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to answer your questions and help you find the
            perfect care solution for your loved one. Contact us today to
            schedule a visit or consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="px-8 py-4 bg-white text-[#025F67] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base">
                Schedule a Visit
              </button> */}
            <Link
              href={"/contact"}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#025F67] transition-colors duration-300 text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RetirementHomesPage;
