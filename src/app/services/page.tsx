import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
// import { ServiceNav } from "../../../components/serviceNav";

export const metadata: Metadata = {
  title: "Home Care Services | Nestra Health Care",
  description:
    "Nursing care, patient attendants, doctor visits, physiotherapy and medical equipment at home. Choose individual services or a complete care package from Nestra Health Care.",
};

const PHONE_DISPLAY = "+91 99023 68800";
const PHONE_HREF = "tel:+919902368800";

/* ---------- Content ---------- */

const navItems = [
  { id: "nursing", label: "Nursing care" },
  { id: "attendants", label: "Attendants & caregivers" },
  { id: "doctor", label: "Doctor visits" },
  { id: "physiotherapy", label: "Physiotherapy" },
  { id: "equipment", label: "Medical equipment" },
];

const dailyNursing = [
  "Post-hospital discharge care & bedridden patient care",
  "Medicines as prescribed by doctor",
  "Wound dressing & pressure sore care",
  "Catheter, feeding-tube, tracheostomy & stoma care",
];

const vitals = ["BP", "Pulse", "Temp", "SpO₂"];

const specialNursing = [
  "Post-surgery care",
  "Stroke & paralysis care",
  "Cancer care",
  "Palliative & end-of-life comfort care",
  "Neurology care",
  "Diabetes care",
  "Dementia care",
  "Support after hospitalization",
];

const shifts = [
  { hours: 6, label: "6 hr" },
  { hours: 8, label: "8 hr" },
  { hours: 12, label: "12 hr" },
  { hours: 24, label: "24 hr" },
];

const attendantTasks = [
  "Bathing, grooming, diaper & toileting help",
  "Feeding, turning & repositioning",
  "Walking, wheelchair & mobility support",
  "Night observation & companionship",
  "Help for elderly living alone",
  "Help for dementia patients",
];

const doctorServices = [
  {
    title: "GP & Geriatrician visits",
    text: "Home visits by a general physician or an elderly specialist.",
  },
  {
    title: "Specialist consultation",
    text: "Arranged through our partners.",
  },
  {
    title: "Post-discharge & chronic disease follow-up",
    text: "Regular check-ins after hospital stays and for long-term conditions.",
  },
  {
    title: "Palliative care",
    text: "Comfort-focused medical support at home.",
  },
  {
    title: "Tele-consultation",
    text: "Speak to a doctor without leaving home.",
  },
];

const physioServices = [
  "After surgery, stroke or joint replacement",
  "Bedside exercises for bedridden patients",
  "Mobility, balance, walking & fall-prevention training",
  "Pain & stiffness relief",
  "Breathing exercises",
  "Caregiver training for safe handling",
];

const equipmentGroups = [
  {
    title: "Mobility & bedside",
    items: [
      "Hospital bed",
      "Wheelchair",
      "Walker",
      "Commode chair",
      "Transfer aids",
      "Air mattress",
    ],
  },
  {
    title: "Breathing support",
    items: [
      "Oxygen concentrator",
      "Nebulizer",
      "Suction machine",
      "CPAP / BiPAP (via clinical partners)",
    ],
  },
  {
    title: "Monitoring",
    items: ["Patient monitor"],
  },
];

/* ---------- Small building blocks ---------- */

const ICONS: Record<string, ReactNode> = {
  heart: <path d="M12 20.5s-7.5-4.6-9.3-9.6A4.9 4.9 0 0 1 12 7.6a4.9 4.9 0 0 1 9.3 3.3c-1.8 5-9.3 9.6-9.3 9.6Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.2" cy="9" r="2.5" />
      <path d="M17.5 14c2.4.2 4 2.2 4 4.8" />
    </>
  ),
  doctor: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v9M7.5 12h9" />
    </>
  ),
  pulse: <path d="M3 12h4l2.5-6.5 4.5 13 2.5-6.5H21" />,
  bed: (
    <>
      <path d="M3 19V6M3 15h18v4M21 15v-3a2.5 2.5 0 0 0-2.5-2.5H11V15" />
      <circle cx="7" cy="11.5" r="1.8" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  phone: <path d="M5 4h3.6l1.8 4.6-2.4 1.5a11 11 0 0 0 5.9 5.9l1.5-2.4L20 15.4V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  message: <path d="M4 5h16v11H9.5L4 20.5V5Z" />,
  shield: <path d="M12 3 20 6v6c0 4.8-3.3 7.9-8 9-4.7-1.1-8-4.2-8-9V6l8-3Z" />,
};

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: keyof typeof ICONS;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
}

function Tick({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        tone === "dark"
          ? "bg-(--accent-tertiary-color) text-white"
          : "bg-(--accent-tertiary-color)/15 text-(--accent-tertiary-color)"
      }`}
    >
      <Icon name="check" className="h-3.5 w-3.5" />
    </span>
  );
}

function SectionHeading({
  title,
  tagline,
  tone = "light",
}: {
  title: string;
  tagline?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-background" : "text-(--accent-color)"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 text-lg leading-relaxed ${
          tone === "dark" ? "text-(--accent-secondary-color)" : "text-foreground"
        }`}
      >
        {tagline}
      </p>
    </div>
  );
}

const tintBg =
  "bg-[color-mix(in_srgb,var(--accent-tertiary-color)_9%,var(--background))]";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-tertiary-color)]";

/* ---------- Page ---------- */

export default function ServicesPage() {
  return (
    <main className="pb-20 md:pb-0">
      <style>{`
        @keyframes nestra-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nestra-rise { animation: nestra-rise .7s cubic-bezier(.2,.7,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .nestra-rise { animation: none; }
        }
      `}</style>

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-112 w-md rounded-full bg-(--accent-tertiary-color)/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-1 md:pb-24 md:pt-20">
          <div>
            <p className="text-base font-semibold text-(--accent-tertiary-color)">
              Quality care at home, with dignity &amp; compassion
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-(--accent-color) sm:text-5xl lg:text-[3.5rem]">
              Complete home care services
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
              We provide medical and non-medical care at your doorstep. Choose
              individual services, or a complete care package.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className={`contact-button items-center justify-center gap-2 hover:brightness-125 ${focusRing}`}
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full border-2 border-(--accent-color) px-6 py-3.75 text-base font-bold text-(--accent-color) transition-colors hover:bg-(--accent-color) hover:text-background ${focusRing}`}
              >
                Request a callback
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          {/* <div className="nestra-rise relative mx-auto w-full max-w-md" style={{ animationDelay: "120ms" }}>
            <div className="green-shade-bg relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-8 shadow-[0_30px_60px_-30px_rgba(6,49,84,0.55)]">
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--accent-tertiary-color)]/40"
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[var(--background)]/10"
              />

              <svg
                viewBox="0 0 320 300"
                className="absolute inset-x-0 bottom-0 w-full"
                role="img"
                aria-label="Illustration of a home with a heart"
              >
                <path d="M30 290V150L160 50l130 100v140Z" fill="#F7F6F2" />
                <path d="M10 156 160 38l150 118" fill="none" stroke="#BCC5CC" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="132" y="190" width="56" height="100" rx="10" fill="#063154" />
                <circle cx="176" cy="242" r="3.5" fill="#F7F6F2" />
                <rect x="58" y="162" width="46" height="46" rx="8" fill="#BCC5CC" />
                <rect x="216" y="162" width="46" height="46" rx="8" fill="#BCC5CC" />
                <path
                  d="M160 142s-26-15-31-31a15 15 0 0 1 31-6 15 15 0 0 1 31 6c-5 16-31 31-31 31Z"
                  fill="#2F9D94"
                />
              </svg>

              <ul className="relative flex flex-col items-start gap-3">
                {[
                  { label: "Nursing at home", icon: "heart" },
                  { label: "Doctor visits", icon: "doctor" },
                  { label: "Physiotherapy", icon: "pulse" },
                ].map((chip, i) => (
                  <li
                    key={chip.label}
                    className="nestra-rise flex items-center gap-2 rounded-full bg-[var(--background)] py-2 pl-3 pr-4 text-sm font-semibold text-[var(--accent-color)] shadow-lg"
                    style={{
                      animationDelay: `${450 + i * 140}ms`,
                      marginLeft: `${i * 28}px`,
                    }}
                  >
                    <span className="text-[var(--accent-tertiary-color)]">
                      <Icon name={chip.icon as keyof typeof ICONS} className="h-5 w-5" />
                    </span>
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </section>

      {/* <ServiceNav items={navItems} /> */}

      {/* ---------------- 1. Nursing ---------------- */}
      <section id="nursing" className="blue-shade-bg scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--accent-tertiary-color) text-white sm:flex">
              <Icon name="heart" className="h-7 w-7" />
            </span>
            <SectionHeading
              tone="dark"
              title="Nursing care at home"
              tagline="24x7 professional nursing support at home."
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Daily */}
            <article className="rounded-3xl bg-background p-7 sm:p-9">
              <h3 className="text-xl font-bold text-(--accent-color)">
                Daily nursing care
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {["12-hour nurses", "24-hour nurses", "Day shifts", "Night shifts"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-(--accent-color) px-3.5 py-1.5 text-sm font-semibold text-background"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-(--accent-tertiary-color)/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Icon name="pulse" className="h-5 w-5 text-(--accent-tertiary-color)" />
                  Vitals check
                </p>
                <ul className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {vitals.map((v) => (
                    <li
                      key={v}
                      className="rounded-xl bg-white/80 py-2 text-sm font-bold text-(--accent-color)"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 space-y-3.5">
                {dailyNursing.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-[#0b0b0b]">
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Special */}
            <article className="rounded-3xl border border-(--accent-secondary-color)/30 bg-foreground p-7 sm:p-9">
              <h3 className="text-xl font-bold text-background">
                Special nursing care
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-(--accent-secondary-color)">
                Experienced nursing for conditions that need closer attention.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {specialNursing.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-(--background)/25 bg-(--background)/10 px-4 py-2.5 text-sm font-semibold text-background"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- 2. Attendants ---------------- */}
      <section id="attendants" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--accent-color) text-background sm:flex">
              <Icon name="users" className="h-7 w-7" />
            </span>
            <SectionHeading
              title="Patient attendants & caregivers"
              tagline="For daily help & companionship."
            />
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Shift visual */}
            <div className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(6,49,84,0.4)] sm:p-9">
              <h3 className="text-lg font-bold text-(--accent-color)">
                Flexible shifts
              </h3>
              <p className="mt-1 text-sm text-foreground">
                Bar length shows hours of care out of 24.
              </p>

              <ul className="mt-7 space-y-5">
                {shifts.map((shift) => (
                  <li key={shift.label} className="flex items-center gap-4">
                    <span className="w-14 shrink-0 text-sm font-bold text-(--accent-color)">
                      {shift.label}
                    </span>
                    <div className="h-4 flex-1 rounded-full bg-(--accent-secondary-color)/35">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-foreground to-(--accent-tertiary-color)"
                        style={{ width: `${(shift.hours / 24) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks */}
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {attendantTasks.map((task) => (
                <li
                  key={task}
                  className="flex gap-3 border-b border-(--accent-secondary-color)/60 pb-4 text-[0.95rem] leading-relaxed text-[#0b0b0b]"
                >
                  <Tick />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- 3. Doctor ---------------- */}
      <section id="doctor" className={`${tintBg} scroll-mt-28 py-16 sm:py-24`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--accent-tertiary-color) text-white sm:flex">
              <Icon name="doctor" className="h-7 w-7" />
            </span>
            <SectionHeading
              title="Doctor visit at home"
              // tagline="Medical consultation without the trip to the clinic."
            />
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {doctorServices.map((s, i) => (
              <li
                key={s.title}
                className={`rounded-3xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(6,49,84,0.5)] ${
                  i < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <h3 className="text-base font-bold leading-snug text-(--accent-color)">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {s.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- 4. Physio ---------------- */}
      <section id="physiotherapy" className="green-shade-bg scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="mb-5 hidden h-14 w-14 items-center justify-center rounded-2xl bg-background text-foreground sm:flex">
              <Icon name="pulse" className="h-7 w-7" />
            </span>
            <SectionHeading
              tone="dark"
              title="Physiotherapy at home"
              tagline="Recover, regain movement and move with confidence in familiar surroundings."
            />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {physioServices.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-(--background)/10 p-5 text-[0.95rem] leading-relaxed text-background ring-1 ring-(--background)/20"
              >
                <Tick tone="dark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- 5. Equipment ---------------- */}
      <section id="equipment" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--accent-color) text-background sm:flex">
              <Icon name="bed" className="h-7 w-7" />
            </span>
            <SectionHeading
              title="Medical equipment on rent & sale"
              // tagline="Everything needed for safe care at home, available to rent or buy."
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {equipmentGroups.map((group) => (
              <div key={group.title}>
                <h3 className="border-b-2 border-(--accent-tertiary-color) pb-2 text-base font-bold text-(--accent-color)">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-(--accent-color) shadow-sm ring-1 ring-(--accent-secondary-color)/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-3xl border border-(--accent-tertiary-color)/40 bg-(--accent-tertiary-color)/10 p-6">
            <span className="text-(--accent-tertiary-color)">
              <Icon name="shield" className="h-7 w-7" />
            </span>
            <p className="text-[0.95rem] leading-relaxed text-(--accent-color)">
              All equipment is sanitized, safety-checked and provided as per
              medical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="blue-shade-bg relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-(--accent-tertiary-color)/30"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-(--foreground)/60"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl">
              Tell us what care your family needs
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-(--accent-secondary-color)">
              Call us to arrange a single service or a complete care package.
            </p>

            <a
              href={PHONE_HREF}
              className={`mt-8 inline-block text-3xl font-bold tracking-tight text-background underline decoration-(--accent-tertiary-color) decoration-4 underline-offset-8 sm:text-5xl ${focusRing}`}
            >
              {PHONE_DISPLAY}
            </a>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-base font-bold text-(--accent-color) transition-transform hover:scale-[1.03] ${focusRing}`}
              >
                <Icon name="phone" className="h-5 w-5" />
                Call now
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-(--background)/70 px-7 py-3.5 text-base font-bold text-background transition-colors hover:bg-(--background)/10 ${focusRing}`}
              >
                <Icon name="message" className="h-5 w-5" />
                Send a message
              </Link>
            </div>

            <p className="mt-10 text-sm font-semibold text-(--accent-secondary-color)">
              Nestra Health Care · Your Health, Our Priority – At Home
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Mobile sticky action bar ---------------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-(--accent-secondary-color)/60 bg-(--background)/95 p-3 backdrop-blur md:hidden">
        <a
          href={PHONE_HREF}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-(--accent-color) py-3 text-sm font-bold text-background ${focusRing}`}
        >
          <Icon name="phone" className="h-5 w-5" />
          Call now
        </a>
        <Link
          href="/contact"
          className={`flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-(--accent-color) py-2.5 text-sm font-bold text-(--accent-color) ${focusRing}`}
        >
          <Icon name="message" className="h-5 w-5" />
          Message
        </Link>
      </div>
    </main>
  );
}