// app/not-found.tsx
import Link from "next/link";
import svgIcon from "../../public/not-found-icon.svg";

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-6 py-8 md:py-16">
        <img src={svgIcon.src} alt="Not Found" width={400} height={400} />
      </div>
      <div className="text-center mb-10 md:mb-14">
        {/* <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-highlight mb-7 lg:mb-10">
          The page you are looking for does not exist
        </p> */}
        <Link href="/" className=" white-shade-text font-semibold blue-shade-bg px-4 py-3 rounded-2xl">
          Return Home
        </Link>
      </div>
    </main>
  );
}
