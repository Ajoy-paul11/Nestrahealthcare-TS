import Image from "next/image";
import doctor from "../public/doctor-demo-image.jpg";
import Link from "next/link";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";


const doctorDetails = [
  {
    name: "Dr. Ramaswami Rao",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
  {
    name: "Dr. Rajesh Kumar",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
  {
    name: "Dr. Anmol Shetty",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
  {
    name: "Dr. Ananya Gowda",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
  {
    name: "Dr. Shriya Venkateswari",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
  {
    name: "Dr. Rohan Mehta",
    title: "Senior Geriatric Specialist, MBBS, MD in Geriatrics",
    image: doctor,
  },
];

function DoctorPreview() {
  return (
    <div className="w-full   mx-auto px-5 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-highlight mb-3">
          Meet Our Doctors
        </h2>
        <p className="text-base md:text-lg text-accent max-w-4xl mx-auto">
          Behind every program is a team of skilled specialists — from
          geriatricians to physiotherapists.
          <br />
          Their goal is simple: to provide holistic care that improves quality
          of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8 px-4">
        {doctorDetails.map((doctor, index) => (
          <div
            key={index}
            className=" flex flex-col md:flex-row items-center gap-6 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl group"
          >
            <Image
              src={doctor.image}
              alt="doctor-image"
              width={192}
              height={192}
            />
            <div className=" flex flex-col justify-between flex-1">
              <div>
                <h3 className=" text-lg font-semibold mb-2 text-highlight">{doctor.name}</h3>
                <p className=" text-sm ">{doctor.title}</p>
              </div>
              <div className=" flex items-center gap-3 mt-4">
                <IconBrandFacebook
                  size={24}
                  className=" text-highlight"
                />
                <IconBrandInstagram
                  size={24}
                  className=" text-highlight"
                />
                <IconBrandLinkedin
                  size={24}
                  className=" text-highlight"
                />
              </div>
            </div>
            <Link
              href={"/doctors"}
              className=" blue-shade-bg text-white p-3 rounded-full "
            >
              <IconArrowRight size={24} className=" transition-all group-hover:-rotate-45"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPreview;
