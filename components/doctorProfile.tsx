// components/DoctorProfile.tsx
import React from "react";
import Link from "next/link";

type Props = {
  imageSrc?: string; // path or URL to image
};

const DoctorProfile: React.FC<Props> = ({ imageSrc = "/doctor.jpg" }) => {
  return (
    <section
      aria-labelledby="doctor-heading"
      className="bg-[var(--color-background)] p-6 md:p-8 max-w-7xl mx-auto my-6 xl:my-10 2xl:my-16"
    >
        <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-highlight mb-3">
        {/* Meet Our Medical Expert */}
        Meet the Doctor
        </h2>
      </div>
      <div className="lg:flex lg:items-start lg:gap-30">
        {/* Image */}
        <div className="flex-shrink-0 w-60 h-72 md:w-82 md:h-116 mx-auto md:mx-0 rounded-lg overflow-hidden ring-1 ring-[var(--accent-secondary-color)]">
          <img
            src={imageSrc}
            alt="Dr. Hajira Shahid - Medical Officer, Nestra Healthcare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-4 md:mt-0 flex-1 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 id="doctor-heading" className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#d75fa4]">
                Dr. Hajira Shahid
              </h2>
              <p className="mt-1 text-sm md:text-base lg:text-xl font-medium text-accent">
                MBBS | GMC-Registered (UK)
              </p>
              <p className="mt-1 text-sm md:text-lg text-[var(--foreground)]">Medical Officer - Nestra Healthcare</p>
            </div>

            {/* badges */}
            {/* <div className="flex gap-2 flex-wrap mt-3 sm:mt-0">
              <span className="px-3 py-1 rounded-full blue-shade-bg text-white-shade-background text-xs md:text-sm">
                GMC Registered
              </span>
              <span className="px-3 py-1 rounded-full green-shade-bg white-shade-text text-xs md:text-sm">
                Palliative Care
              </span>
              <span className="px-3 py-1 rounded-full border border-[var(--accent-secondary-color)] text-xs md:text-sm text-[var(--foreground)]">
                Rehab & PMR
              </span>
            </div> */}
          </div>

          {/* professional summary */}
          <div className="mt-4">
            <h3 className=" text-base lg:text-lg font-semibold text-[var(--foreground)]">Doctor's Profile</h3>
            <p className="mt-2 text-xs md:text-lg leading-relaxed text-[var(--foreground)]">
              Dr. Hajira Shahid is a medical officer at Nestra Healthcare, working in palliative care,
              assisted living, and physical medicine & rehabilitation. She focuses on comprehensive
              medical management for patients with chronic, progressive and life-limiting illnesses —
              emphasising comfort, dignity and quality of life.
            </p>
          </div>

          {/* two-column details */}
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <h4 className=" text-sm lg:text-lg font-semibold text-[var(--foreground)]">Education & Training</h4>
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-xs lg:text-base text-[var(--foreground)]">
                <li>MBBS — Mahsa University, Malaysia</li>
                <li>Clinical Internship — Vydehi Institute of Medical Sciences</li>
                <li>GMC Registration (UK) — Registered practitioner</li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-sm font-medium text-[var(--foreground)]">Focus Areas</h4>
              <ul className="mt-2 space-y-2 text-sm text-[var(--foreground)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-tertiary-color)" }} />
                  <span>Palliative care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-tertiary-color)" }} />
                  <span>Assisted living</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-tertiary-color)" }} />
                  <span>Physical medicine & rehabilitation</span>
                </li>
              </ul>
            </div> */}
          </div>

          {/* actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full blue-shade-bg text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              Book consultation
            </Link>

            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[var(--accent-secondary-color)] text-sm text-[var(--foreground)] bg-white"
            >
              View full profile
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
