import aboutImage from "../public/about-image.webp";
function AboutSection() {
  return (
    <section className=" w-full h-full p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 my-12 lg:my-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
        <div className=" flex flex-col gap-8 lg:p-8 xl:p-12 2xl:p-16 ">
          <h4 className=" text-lg lg:text-xl xl:text-2xl uppercase">
            our introduction
          </h4>
          <h3 className=" text-[1.1rem] lg:text-[1.4rem] 2xl:text-[1.8rem] py-4">
            At{" "}
            <span className=" text-[#025F67] style-font text-[2rem] 2xl:text-[2.5rem]">
              {" "}
              Nestra Health Care
            </span>
            , We believe care is more than medical attention — it’s empathy,
            respect, and companionship. With a team of experienced doctors,
            nurses, and caregivers, we ensure every resident feels valued,
            supported, and safe.
          </h3>
          {/* <h3 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold py-2">
            Generous Plots and Farm Lands
          </h3>
          <h4 className=" text-2xl lg:text-3xl xl:text-4xl text-[#F7C35F] font-medium py-1">
            We're Leader in Farm-Land Market
          </h4> */}
          {/* <p className=" text-xl lg:text-2xl xl:text-3xl">
            Discover regenerative farmland investments that nurture both soil
            and returns. Portfolio of premium land properties designed for those
            who seek to build their legacy on solid foundations.
          </p> */}
        </div>
        <div className=" h-full">
          {/* <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
            <defs>
              <clipPath id="differentone16" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.911218 0.329658C0.917139 0.29671 0.914994 0.262818 0.904967 0.23088C0.894939 0.198941 0.877327 0.169906 0.853635 0.146256C0.829944 0.122605 0.800878 0.105043 0.768923 0.0950708C0.736967 0.0850983 0.703072 0.083012 0.670134 0.0889901C0.651042 0.0615242 0.625587 0.0390856 0.595943 0.0235895C0.566299 0.00809344 0.533346 0 0.499896 0C0.466446 0 0.433493 0.00809344 0.403849 0.0235895C0.374204 0.0390856 0.34875 0.0615242 0.329658 0.0889901C0.29675 0.0830893 0.262904 0.0852337 0.231005 0.0952406C0.199106 0.105248 0.1701 0.12282 0.14646 0.14646C0.12282 0.1701 0.105248 0.199106 0.0952406 0.231005C0.0852337 0.262904 0.0830893 0.29675 0.0889901 0.329658C0.0615242 0.34875 0.0390856 0.374204 0.0235895 0.403849C0.00809344 0.433493 0 0.466446 0 0.499896C0 0.533346 0.00809344 0.566299 0.0235895 0.595943C0.0390856 0.625587 0.0615242 0.651042 0.0889901 0.670134C0.0830405 0.703077 0.0851562 0.73697 0.0951563 0.768917C0.105156 0.800864 0.122744 0.829915 0.146414 0.853586C0.170085 0.877256 0.199136 0.894844 0.231083 0.904844C0.26303 0.914844 0.296923 0.916959 0.329866 0.91101C0.348958 0.938476 0.374413 0.960914 0.404057 0.97641C0.433701 0.991907 0.466654 1 0.500104 1C0.533554 1 0.566507 0.991907 0.596151 0.97641C0.625796 0.960914 0.65125 0.938476 0.670343 0.91101C0.70327 0.916921 0.737139 0.914776 0.769057 0.904759C0.800976 0.894741 0.829997 0.877149 0.853642 0.853483C0.877287 0.829818 0.894854 0.800782 0.904844 0.768854C0.914834 0.736927 0.916949 0.703056 0.91101 0.670134C0.938476 0.651042 0.960914 0.625587 0.97641 0.595943C0.991907 0.566299 1 0.533346 1 0.499896C1 0.466446 0.991907 0.433493 0.97641 0.403849C0.960914 0.374204 0.938476 0.34875 0.91101 0.329658H0.911218Z"
                  fill="black"
                />
              </clipPath>
            </defs>
          </svg>


          <figure style={{ clipPath: "url(#differentone16)" }} className="">
            <img
              src="https://picsum.photos/400/300"
              alt="Description"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </figure> */}
          
      
      {/* Image with clip path applied */}
      <figure className=" rounded-tr-full">
        <img
          src={aboutImage.src}
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-tr-[120px] rounded-bl-[120px]"
        />
      </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
