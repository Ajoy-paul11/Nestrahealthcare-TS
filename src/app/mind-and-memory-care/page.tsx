import {
  IconClipboardList,
  IconUserShield,
  IconHomeShield,
  IconBrain,
  IconCalendarTime,
  IconHeartHandshake,
  IconUsersGroup,
  } from "@tabler/icons-react";
  import Link from "next/link";
  import image1 from "../../../public/mind-and-memory2.png";
  import image2 from "../../../public/mind-and-memory.png";
  
  export default function AssistedLivingPage() {
    const features = [
      {
        icon: IconClipboardList,
        title: "Personalized Care Plans",
        description:
          "Individual care plans tailored to each resident’s cognitive condition, routines, preferences, and stage of memory loss.",
      },
      {
        icon: IconUserShield,
        title: "Trained Dementia Care Professionals",
        description:
          "Experienced caregivers trained in dementia and Alzheimer’s care best practices, communication techniques, and behavior management.",
      },
      {
        icon: IconHomeShield,
        title: "Safe & Secure Environment",
        description:
          "A thoughtfully designed environment with safety monitoring, supervised movement, and reduced confusion zones to ensure peace of mind.",
      },
      {
        icon: IconBrain,
        title: "Cognitive Stimulation Activities",
        description:
          "Memory exercises, music therapy, storytelling, light physical activities, and sensory engagement programs to support brain health.",
      },
      {
        icon: IconCalendarTime,
        title: "Structured Daily Routine",
        description:
          "Predictable schedules that help reduce anxiety, confusion, and agitation among residents.",
      },
      {
        icon: IconHeartHandshake,
        title: "Emotional & Companionship Support",
        description:
          "Continuous emotional care to reduce loneliness and promote social connection and comfort.",
      },
      {
        icon: IconUsersGroup,
        title: "Family Support & Regular Updates",
        description:
          "Transparent communication with families, progress updates, and guidance on memory care planning.",
      },
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mind & Memory Care
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
               Trusted Companion Care for Senior Living
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
              className="w-full h-[300px] lg:h-[500px] object-cover bg-center"
            />
            <div className="hidden xl:block absolute inset-0 from-80% from-transparent to-100% to-white bg-gradient-to-r"></div>
          </div>
          <div className="max-w-1/2 mx-auto text-center px-2 md:px-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
              Introduction
            </h2>
            <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
            At Nestra Healthcare, our Mind & Memory Care program is designed to support seniors experiencing memory loss, dementia, Alzheimer’s disease, and other cognitive challenges. 
            <br />
            We understand that changes in memory can be emotionally difficult — both for seniors and their families. Our approach focuses on compassionate care, structured routines, and a safe, calming environment.
            <br />
            With trained caregivers, personalized care plans, and engaging cognitive activities, Nestra ensures that every individual receives the right balance of medical support, emotional reassurance, and meaningful daily engagement.
            </p>
          </div>
        </section>
  
        
  
        {/* Key Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-4">
              Key Features of Our Mind & Memory Care
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
  
        {/* What is Assisted Living Section */}
        <section className=" relative flex flex-col xl:flex-row items-center gap-6 bg-white">
          <div className="max-w-1/2 mx-auto text-center px-2 md:px-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-highlight mb-6">
            What is Mind & Memory Care?
            </h2>
            <div className="space-y-4 text-sm lg:text-lg text-gray-700 leading-relaxed">
              <p>
              Mind & Memory Care is a specialized form of senior care created for individuals experiencing memory-related conditions such as dementia, Alzheimer’s disease, and age-related cognitive decline.
              </p>
              <div className=" flex flex-col items-center">
                <h3 className="text-lg lg:text-xl font-bold text-[#d75fa4] mb-4">
                Unlike general assisted living, memory care focuses on:
                </h3>
                <ul className=" list-disc list-outside pl-5 text-left space-y-1">
                  <li>Supporting daily activities affected by memory loss</li>
                  <li>Managing behavioral and emotional changes</li>
                  <li>Providing a safe, structured, and supervised environment</li>
                  <li>Preserving independence while ensuring continuous care</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" relative w-full overflow-hidden ">
            <img
              src={image2.src}
              alt="Assisted Living"
              className="w-full h-[300px] lg:h-[500px] 2xl:h-[600px] object-cover bg-center"
            />
            <div className="hidden xl:block absolute inset-0 from-0% from-white to-25% to-transparent bg-gradient-to-r"></div>
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
  