import Intro from "./Intro";

const Hero = () => {
  return (
    <section className="">
      <div className="absolute top-0 w-[170%] md:w-[150%] h-[600px] rounded-bl-full -rotate-20 -translate-x-40 -translate-y-1/4 md:-translate-y-1/3 md:-translate-x-60 lg:-translate-y-1/2 lg:-translate-x-70 z-5 bg-[url(./assets/RectLight.svg)] bg-no-repeat bg-center bg-cover"></div>

      <div className="absolute top-0 w-[150%] h-[600px] rounded-bl-full -rotate-20 -translate-x-60 md:-translate-x-30 -translate-y-30 md:-translate-y-50 lg:-translate-y-75 lg:-translate-x-40 z-1 bg-gray-300"></div>
      <Intro />
    </section>
  );
};

export default Hero;
