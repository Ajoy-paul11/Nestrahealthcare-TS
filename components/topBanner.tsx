import { IconClock, IconLocation, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

function TopBanner() {
  return (
    <section className=" w-full h-full green-shade-bg text-white">
      <div className=" w-full h-full py-4 lg:py-6 px-3 lg:px-8 flex justify-center lg:justify-end">
        <div className=" flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          <div className=" flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 lg:gap-4">
              <div >
                <IconPhoneCall size={30}/>
              </div>
              <div className=" text-xs lg:text-base">
                <h3 className=" uppercase">emergency</h3>
                <h6>+91 1234567890</h6>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 lg:gap-4">
              <div>
                <IconClock size={30}/>
              </div>
              <div className=" text-xs lg:text-base">
                <h3 className=" uppercase">work hours</h3>
                <h6>9:00 - 7:00 Everyday</h6>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="flex justify-between lg:justify-center items-center gap-3 lg:gap-4">
              <div>
                <IconMapPin size={30}/>
              </div>
              <div className=" text-xs lg:text-base">
                <h3 className=" uppercase">location</h3>
                <h6>123,Main Street,Sub Cross,Bangalore</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
