import Intro from "./Intro";

const Hero = () => {
  return (
    <section>
      <div className="absolute top-0 w-[150%] h-[600px] rounded-bl-full -rotate-20 -translate-y-1/2 -translate-x-40 z-5 bg-[url(./assets/RectLight.svg)] bg-no-repeat bg-center bg-cover"></div>
      <div className="absolute top-0 w-[150%] h-[600px] rounded-bl-full -rotate-20 -translate-y-70 -translate-x-25 z-1 bg-gray-300"></div>
      <Intro />
    </section>
  );
};

export default Hero;
