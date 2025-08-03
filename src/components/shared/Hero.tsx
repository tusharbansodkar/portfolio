import Intro from "./Intro";

const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-x-hidden">
      <div className="relative z-5 w-[150%] h-[600px] rounded-bl-full -rotate-16 -translate-y-1/4 md:-translate-y-1/3 lg:-translate-y-1/2 -translate-x-40 md:-translate-x-60 lg:-translate-x-70 bg-[url(./assets/RectLight.svg)] bg-no-repeat bg-center bg-cover"></div>

      <div className="absolute top-0 w-[150%] h-[600px] rounded-bl-full -rotate-16 -translate-y-25 md:-translate-y-50 lg:-translate-y-75 -translate-x-20 md:-translate-x-30 lg:-translate-x-30 bg-gray-300"></div>
      <Intro />
    </div>
  );
};

export default Hero;
