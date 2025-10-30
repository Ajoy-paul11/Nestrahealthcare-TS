import {
  IconCarambola,
  IconHearts,
  IconHomeHeart,
  IconLivePhoto,
  IconStretching,
} from "@tabler/icons-react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <section className=" my-6 2xl:my-12">
      <section className=" p-8 bg-[#063154]">
        <div className=" overflow-hidden text-[#F7F6F2]">
          <Marquee className="no-scrollbar" speed={100}>
            <div className=" inline-flex items-center gap-4 mx-10">
              <IconHomeHeart size={30} />
              <span className=" uppercase text-xl lg:text-3xl">
              Care that feels like home
              </span>
            </div>
            <div className=" inline-flex items-center gap-4 mx-10">
              <IconLivePhoto size={30} />
              <span className=" uppercase text-xl lg:text-3xl">
              Where dignity meets comfort
              </span>
            </div>
            <div className=" inline-flex items-center gap-4 mx-10">
              <IconStretching size={30} />
              <span className=" uppercase text-xl lg:text-3xl">
              A place to live with joy
              </span>
            </div>
            {/* <div className=" inline-flex items-center gap-4 mx-10">
              <IconHearts size={30} />
              <span className=" uppercase text-xl lg:text-3xl">
                Palliative & End-of-Life Care
              </span>
            </div>
            <div className=" inline-flex items-center gap-4 mx-10">
              <IconCarambola size={30} />
              <span className=" uppercase text-xl lg:text-3xl">
                Nutritional & Wellness Programs
              </span>
            </div> */}
          </Marquee>
        </div>
      </section>
    </section>
  );
}

export default MarqueeSection;
