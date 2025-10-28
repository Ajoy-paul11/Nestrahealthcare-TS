import Link from "next/link";
import footerLogo from "../public/logo2.png";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className=" w-full bg-[#063154]">
      <div
        className=" p-6 lg:p-12"
        //   style={{
        //     backgroundImage: `url(https://ik.imagekit.io/Linkjoy/Ebrahma%20Pragati/footer-image.webp?updatedAt=1755955168752)`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "bottom",
        //     backgroundRepeat: "no-repeat",
        //   }}
      >
        {/* <div className=" absolute inset-0 bg-[#354e33]/70"></div> */}
        <div className="max-w-7xl mx-auto px-6 text-[#FFFAFA] relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-1 p-4 overflow-hidden">
              <img src={footerLogo.src} className=" bg-cover w-full h-full" />

              <div className=" ">
                {/* <h4 className="font-bold text-xl">Nestra Health Care</h4> */}
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Doctors
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
              {/* <Link> href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link> href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link> */}
            </nav>

            {/* Copyright */}
            <div className="text-sm">
              © {new Date().getFullYear()} Nestra Health Care. All rights
              reserved.
              <br />
              <div className="flex justify-center items-center gap-6 mt-2">
                <div className=" border border-white rounded-xl p-1">
                <Link href="https://www.facebook.com/profile.php?id=61582729811760/" target="_blank"> 
                  <IconBrandFacebookFilled
                   size={24}
                   className=" hover:text-accent cursor-pointer"
                   />
                   </Link>
                </div>
                <div className=" border border-white rounded-xl p-1">
                  <Link href="https://www.instagram.com/nestrahealthcare/" target="_blank">
                  <IconBrandInstagramFilled
                    size={24}
                    className=" hover:text-accent cursor-pointer"
                  />
                  </Link>
                </div>
                <div className=" border border-white rounded-xl p-1">
                  <IconBrandLinkedinFilled
                    size={24}
                    className=" hover:text-accent cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
