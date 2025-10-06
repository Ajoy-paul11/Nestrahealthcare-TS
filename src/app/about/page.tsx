import {
  IconAwardFilled,
  IconHeartbeat,
  IconShieldFilled,
  IconUsers,
} from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            A Vision of Dignity, <br />
            <span className=" ">Safety & Respect</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Nestra Healthcare was founded with a mission: to make quality
                  senior and disability care accessible, compassionate, and
                  professional.
                </p>
                <p>
                  Our facility in Bangalore blends medical excellence with a
                  homely atmosphere, ensuring residents feel cared for in every
                  way.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7551661/pexels-photo-7551661.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#025F67]/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Our Philosophy
          </h2>
          <p className="text-center text-white mb-16 text-lg">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 green-shade-bg rounded-full flex items-center justify-center mb-6">
                <IconHeartbeat className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                Empathy First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every resident deserves respect and kindness. We treat each
                person with the dignity and compassion they deserve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 green-shade-bg rounded-full flex items-center justify-center mb-6">
                <IconShieldFilled className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                Safety Always
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Secure environments, 24/7 supervision, and medical readiness
                ensure peace of mind for families and residents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 green-shade-bg rounded-full flex items-center justify-center mb-6">
                <IconAwardFilled className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                Excellence in Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experienced doctors and caregivers dedicated to well-being,
                providing the highest standard of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 green-shade-bg rounded-full flex items-center justify-center mb-6">
                <IconUsers className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Our Team
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our caregivers and medical staff work hand-in-hand with
                  families to provide customized support.
                </p>
                <p>
                  Together, we ensure comfort, healing, and peace of mind for
                  every resident in our care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#025F67] to-[#2F9D94] ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Mission & Vision</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4 text-accent">Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver personalized care that empowers residents to live
                fulfilling, dignified lives.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4 text-accent">Vision</h3>
              <p className="text-lg leading-relaxed">
                To be Bangalore's most trusted name in senior and disability
                care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
