import {
  IconHeart,
  IconHome,
  IconStethoscope,
  IconClipboardCheck,
  IconApple,
  IconMoodSmile,
  IconUsers,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";

export default function AssistedLivingPage() {
  const features = [
    {
      icon: IconClipboardCheck,
      title: "Personalized Care Plans",
      description:
        "Individual care plans tailored to each resident's health needs, routines, and preferences, with regular assessments and updates.",
    },
    {
      icon: IconHeart,
      title: "Daily Living Support",
      description:
        "Compassionate assistance with activities such as bathing, dressing, mobility, and medication reminders—always delivered with dignity and respect.",
    },
    {
      icon: IconHome,
      title: "Homely & Safe Environment",
      description:
        "Thoughtfully designed living spaces that feel warm and familiar, supported by safety measures and attentive supervision.",
    },
    {
      icon: IconStethoscope,
      title: "Health Monitoring & Medical Support",
      description:
        "Regular health check-ins, coordination with doctors, and quick access to medical assistance when needed.",
    },
    {
      icon: IconApple,
      title: "Nutritious Meals & Wellness Focus",
      description:
        "Balanced, senior-friendly meals and a focus on overall physical and emotional well-being.",
    },
    {
      icon: IconMoodSmile,
      title: "Engaging Day Activities",
      description:
        "Light activities, social interaction, and meaningful engagement to promote mental wellness and a sense of belonging.",
    },
    {
      icon: IconUsers,
      title: "Trained & Compassionate Caregivers",
      description:
        "A dedicated team chosen not just for skills, but for empathy, patience, and genuine care.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Assisted Living
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Live independently with the support you need
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
            Introduction
          </h2>
          <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
            At Nestra Healthcare, Assisted Living is designed for seniors who
            value independence but need reliable daily support. We offer a safe,
            engaging, and compassionate environment where elders can live
            comfortably, confidently, and with dignity—without the stress of
            managing everyday responsibilities alone.
          </p>
        </div>
      </section>

      {/* What is Assisted Living Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
                What is Assisted Living?
              </h2>
              <div className="space-y-4 text-sm lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  Assisted Living is a supportive care solution for seniors who
                  require help with select daily activities while continuing to
                  lead an active and self-directed life. At Nestra, care is
                  personalized, flexible, and respectful - providing just the
                  right level of assistance, without compromising autonomy or
                  self-worth.
                </p>
                <p>
                  Our Bangalore-based healthcare center blends professional
                  caregiving with a homely atmosphere, ensuring every resident
                  feels secure, cared for, and truly at home.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#025F67] to-[#2F9D94] rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <IconCheck
                      className="text-white mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-white text-sm lg:text-base">
                      Independence with support
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <IconCheck
                      className="text-white mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-white text-sm lg:text-base">
                      Professional yet homely care
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <IconCheck
                      className="text-white mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-white text-sm lg:text-base">
                      Dignity and respect always
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <IconCheck
                      className="text-white mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-white text-sm lg:text-base">
                      Flexible, personalized support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-4">
              Key Features of Nestra Assisted Living
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
                    <div className="flex-shrink-0"> 

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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#025F67] to-[#2F9D94]">
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
