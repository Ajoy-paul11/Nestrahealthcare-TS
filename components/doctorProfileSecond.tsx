import React from "react";
import Link from "next/link";

type Props = {
  imageSrc?: string; // path or URL to image
};

const DoctorProfileSecond: React.FC<Props> = ({ imageSrc = "/doctor.jpg" }) => {
  return (
    <section
      aria-labelledby="doctor-heading"
      className=" bg-(--color-background) p-6 md:p-8 max-w-7xl mx-auto my-6 xl:my-10 2xl:my-16"
    >
      <div className="lg:flex lg:items-start lg:gap-30">
        {/* Content */}
        <div className="mt-4 md:mt-0 flex-1 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2
                id="doctor-heading"
                className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#d75fa4]"
              >
                Dr. Fiza Anjum
              </h2>
              <p className="mt-1 text-sm md:text-base lg:text-xl font-medium text-accent">
                MBBS, Registration: KMC186533
              </p>
              {/* <p className="mt-1 text-sm md:text-lg text-foreground">Experience: 16 yrs</p> */}
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
          {/* <div className="mt-4">
            <h3 className=" text-base lg:text-lg font-semibold text-foreground">Doctor's Profile</h3>
            <p className="mt-2 text-xs md:text-lg leading-relaxed text-foreground">
              Dr. Hajira Shahid is a medical officer at Nestra Healthcare, working in palliative care,
              assisted living, and physical medicine & rehabilitation. She focuses on comprehensive
              medical management for patients with chronic, progressive and life-limiting illnesses —
              emphasising comfort, dignity and quality of life.
            </p>
          </div> */}

          {/* two-column details */}
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              {/* <h4 className=" text-sm lg:text-lg font-semibold text-foreground">Area of Special Interest</h4> */}
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-xs lg:text-base text-foreground">
                <li>
                  Completed MBBS from The Oxford Medical College Hospital And
                  Research Centre
                </li>
                <li>
                  She is dedicated to providing compassionate, patient-centered
                  care with a focus on promoting health, wellness, and quality
                  of life among senior patients.
                </li>
                {/* <li>Reconstructive urology- pyeloplasty, urethroplasty, hypospadias repair</li>
                <li>Renal transplant surgery- donor nephrectomy and recipient transplantation</li>
                <li>Endourological procedures for ureter and kidney stones, laser procedures for prostate</li>
                <li>Robotic surgery</li> */}
              </ul>
            </div>

            {/* <div>
              <h4 className="text-sm text-foreground font-semibold">Publications</h4>
              <ul className="mt-2 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <span className=" inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-tertiary-color)" }} />
                  <span> Has numerous presentations and publications to his credit
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className=" inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-tertiary-color)" }} />
                  <span> Attended various workshops and conferences nationally and internationally</span>
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
          </div>
        </div>

        {/* Image */}
        <div className=" shrink-0 w-60 h-72 md:w-82 md:h-116 mx-auto md:mx-0 rounded-lg overflow-hidden ring-1 ring-(--accent-secondary-color)">
          <img
            src={imageSrc}
            alt="Dr. Hajira Shahid - Medical Officer, Nestra Healthcare"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSecond;
