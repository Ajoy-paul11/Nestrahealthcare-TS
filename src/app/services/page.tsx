import Link from "next/link";
import {
  IconActivity,
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconCircle,
  IconCircleCheckFilled,
  IconHeartFilled,
  IconHome,
  IconSalad,
} from "@tabler/icons-react";

export default function ServicesPage() {
  const services = [
    {
      icon: IconHome,
      title: "Elderly Residential Care",
      description:
        "Safe, comfortable, and homelike spaces with round-the-clock support.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: IconBrain,
      title: "Memory & Dementia Care",
      description:
        "Structured routines, memory-stimulating activities, and compassionate supervision for those living with dementia or Alzheimer's.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: IconActivity,
      title: "Physiotherapy & Mobility Support",
      description:
        "On-site physiotherapists provide personalized plans to restore independence and improve mobility.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: IconHeartFilled,
      title: "Palliative & End-of-Life Care",
      description:
        "Comfort-driven support for patients and families with focus on dignity and relief.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: IconSalad,
      title: "Nutrition & Wellness Programs",
      description:
        "Balanced meals, health monitoring, and lifestyle programs to ensure vitality.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const benefits = [
    "Modern medical equipment & emergency readiness",
    "Expert doctors in geriatrics, neurology, and physiotherapy",
    "Personalized programs tailored to residents' conditions",
    "Safe, clean, and welcoming environment",
  ];

  return (
    <div className="min-h-screen ">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Care Programs Designed <br />
            <span className=" ">for Every Need</span>
          </h1>
          <p className=" lg:text-xl text-emerald-50 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to support every stage of
            life with dignity and expertise
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-bold text-highlight mb-4 text-center">
            Core Services
          </h2>
          <p className="text-center text-gray-600 mb-16 text-sm lg:text-lg">
            Specialized care programs designed by experts
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold text-highlight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 blue-shade-bg ">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Nestra?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <IconCircleCheckFilled className=" text-highlight" size={28} />
                </div>
                <p className=" text-sm lg:text-lg leading-relaxed capitalize">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#2F9D94]  text-white font-bold text-sm lg:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>Book a Consultation</span>
              <IconArrowRight size={24} className="group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300"/>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2F9D94]/60 to-[#2F9D94]/20 rounded-3xl p-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
              Ready to Experience Quality Care?
            </h2>
            <p className=" text-sm lg:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our team is ready to discuss how we can support you and your loved
              ones with personalized care programs.
            </p>
            <Link
              href="/doctors"
              className="inline-flex items-center space-x-2 blue-shade-bg text-white font-bold text-sm lg:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Meet Our Doctors</span>
              <IconArrowRight size={24} className="group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
