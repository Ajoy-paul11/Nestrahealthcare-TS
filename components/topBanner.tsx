import {
  IconClock,
  IconLocation,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";

function TopBanner() {
  return (
    <section className=" w-full h-full green-shade-bg text-white">
      <div className=" w-full h-full py-4 lg:py-6 px-0.5 lg:px-8 flex justify-center lg:justify-end">
        <div className=" flex justify-between items-center gap-4 lg:gap-8">
          <div className=" flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 lg:gap-4">
              <div>
                <IconPhoneCall size={30} />
              </div>
              <div className=" text-xs lg:text-base">
                <Link href="tel:+919902368800">
                  <h3 className=" uppercase">emergency</h3>
                  <h6>+91 9902368800</h6>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=" flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 lg:gap-4">
              <div>
                <IconClock size={30}/>
              </div>
              <div className=" text-xs lg:text-base">
                <h3 className=" uppercase">work hours</h3>
                <h6>9am to 6pm Everyday</h6>
              </div>
            </div>
          </div> */}
          <div className=" flex justify-center items-center">
            <Link
              href="https://maps.app.goo.gl/p78Hdj7wVSgkEHFR6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between lg:justify-center items-center gap-3 lg:gap-4">
                <div>
                  <IconMapPin size={30} />
                </div>
                <div className=" text-[10px] lg:text-base">
                  <h3 className=" uppercase">location</h3>
                  <h6>
                    {" "}
                    Shiv Enclave, 1201, 25th cross Rd, <br/> 5th block, Ashwath Nagar, HBR
                    Layout
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
