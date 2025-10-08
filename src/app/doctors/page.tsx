import Link from "next/link";
import {
  IconArrowRight,
  IconAward,
  IconBriefcase,
  IconCalendarWeek,
  IconHeart,
} from "@tabler/icons-react";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Ananya Rao",
      title: "Senior Geriatric Specialist",
      qualifications: "MBBS, MD in Geriatrics",
      experience: "15+ years in elderly care and chronic illness management",
      expertise: "Dementia care, long-term geriatric management",
      approach: "Patient-centered, empathetic, and family-inclusive care",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Dr. Rohan Mehta",
      title: "Physiotherapy & Mobility Specialist",
      qualifications: "MPT, Certified in Neuro-Physiotherapy",
      experience: "10 years in rehabilitation and mobility recovery",
      expertise: "Post-surgery rehab, stroke recovery, mobility assistance",
      approach: "Hands-on therapy with tailored exercise plans",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const highlights = [
    {
      icon: IconAward,
      title: "Cross-specialization teamwork",
      description:
        "Our doctors collaborate across disciplines for holistic care",
    },
    {
      icon: IconBriefcase,
      title: "Decades of combined experience",
      description:
        "Extensive expertise in geriatric and specialized healthcare",
    },
    {
      icon: IconHeart,
      title: "Personalized consultations",
      description: "Individual attention for every resident and family",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Skilled Doctors. <br />
            <span className="">Compassionate Healers.</span>
          </h1>
          <p className="lg:text-xl  max-w-3xl mx-auto">
            Meet the dedicated professionals committed to your health and
            well-being
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Expert Team
          </h2>
          <p className="text-center text-gray-600 mb-16 text-sm lg:text-lg">
            Highly qualified professionals dedicated to your care
          </p>

          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl lg:text-3xl font-bold">{doctor.name}</h3>
                      <p className="text-emerald-400 text-sm lg:text-lg font-medium">
                        {doctor.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start space-x-3 mb-3">
                        <IconAward
                          className="text-emerald-600 flex-shrink-0 mt-1"
                          size={24}
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm lg:text-lg mb-1">
                            Qualifications
                          </h4>
                          <p className="text-gray-700">
                            {doctor.qualifications}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start space-x-3 mb-3">
                        <IconBriefcase
                          className="text-emerald-600 flex-shrink-0 mt-1"
                          size={24}
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm lg:text-lg mb-1">
                            Experience
                          </h4>
                          <p className="text-gray-700">{doctor.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start space-x-3 mb-3">
                        <IconHeart
                          className="text-emerald-600 flex-shrink-0 mt-1"
                          size={24}
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm lg:text-lg mb-1">
                            Expertise
                          </h4>
                          <p className="text-gray-700">{doctor.expertise}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                      <h4 className="font-bold text-gray-900 text-sm lg:text-lg mb-2">
                        Approach
                      </h4>
                      <p className="text-gray-700 italic">{doctor.approach}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 green-shade-bg text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-bold mb-4 text-center">
            Why Our Doctors Stand Out
          </h2>
          <p className="text-center text-emerald-50 mb-16 text-sm lg:text-lg">
            Excellence in every aspect of care
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 transition-all duration-300"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 green-shade-bg bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="lg:text-2xl font-bold mb-4 text-accent">{highlight.title}</h3>
                  <p className="text-accent leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-accent font-bold text-sm lg:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <IconCalendarWeek size={24} />
              <span>Schedule a Doctor's Appointment</span>
              <IconArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
            <h2 className=" text-xl lg:text-3xl font-bold text-highlight mb-6">
              Experience World-Class Care
            </h2>
            <p className=" text-sm lg:text-lg text-gray-700 mb-8">
              Our doctors are ready to provide you with the personalized
              attention and expert care you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 green-shade-bg text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className=" text-sm lg:text-lg">Contact Us</span>
                <IconArrowRight size={20} className="group-hover:ml-2 group-hover:-rotate-45 duration-300 ease-in-out"/>
              </Link>
              <Link
                href="/specialization"
                className="inline-flex items-center justify-center space-x-2 blue-shade-bg text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className=" text-sm lg:text-lg">View Our Services</span>
                <IconArrowRight size={20} className="group-hover:ml-2 group-hover:-rotate-45 duration-300 ease-in-out"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
