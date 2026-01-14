import React from "react";
import Image from "next/image";
import doctor from "../public/doctor-demo-image.jpg";
import Link from "next/link";
import {
    IconHomeHeart,
    IconSun,
    IconExchange,
    IconAdjustmentsCheck,
    IconBrain,
    IconLeaf,
    IconRecharging,
    IconBuildingHospital,
    IconMicroscope,
    IconStretching,
    IconPill,
    IconArrowRight
} from "@tabler/icons-react";

const doctorDetails = [
  {
    name: "Assisted Living",
    icon: IconHomeHeart,
    subpage: "/assisted-living"
  },
  {
    name: "Day care services",
    icon: IconSun,
  },
  {
    name: "Transition Care",
    icon: IconExchange
  },
  {
    name: "Rehabilitation Care",
    icon: IconAdjustmentsCheck
  },
  {
    name: "Mind & Memory Care",
    icon: IconBrain
  },
  {
    name: "Palliative Care",
    icon: IconLeaf
  },
  {
    name: "Respite Care",
    icon: IconRecharging
  },
  {
    name: "Multi speciality clinic",
    icon: IconBuildingHospital
  },
  {
    name: "Diagnostics",
    icon: IconMicroscope
  },
  {
    name: "Physiotherapy",
    icon: IconStretching
  },
  {
    name: "Pharmacy",
    icon: IconPill
  },
];

function ServicePreview() {
  return (
    <div className="w-full   mx-auto px-5 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-highlight mb-3">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12 px-4 ">
        {doctorDetails.map((doctor, index) => (
          <Link
            href={doctor.subpage ? doctor.subpage : "/"}
            key={index}
            className=" flex flex-col md:flex-row items-center gap-6 p-6 bg-[#2F9D94] hover:bg-[#063154] transition-colors duration-600 ease-in-out rounded-2xl group"
          >
            <div className=" flex justify-between items-center flex-1">
              <div className="text-[#063154] group-hover:text-[#F7F6F2] transition-colors duration-600 hidden group-hover:block">
                <doctor.icon size={36} stroke={1.5} />
              </div>
              <div>
                <h3 className=" text-lg lg:text-xl 2xl:text-2xl mb-2 text-[#F7F6F2] transition-colors duration-600">
                  {doctor.name}
                </h3>
              </div>
              <div className="text-[#063154] group-hover:text-[#F7F6F2] transition-colors duration-600 hidden group-hover:block">
                <IconArrowRight size={36} stroke={1.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicePreview;
