import careVideo from "../public/caring-video.mp4";
function VideoSection() {
  return (
    <div className=" relative w-full h-full">
      <div className=" m-0 p-0 border-none h-[700px]">
        <video autoPlay loop muted className=" w-full h-full object-cover">
          <source src="/caring-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        className="  absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center text-[#F7F6F2]"
      >
        <div className=" pb-2.5 text-xl font-medium capitalize">
          Nestra Health Care
        </div>
        <div className=" text-4xl font-medium pb-2.5 text-center">
          Happiness lives here
          <br />
          and so you can
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
