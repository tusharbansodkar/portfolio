import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center z-8 m-auto w-[100%] h-[500px] ">
      <div className="leading-5 pl-14">
        <h1 className="font-[Londrina_Outline] text-white text-5xl mb-8">
          Hello, I'm
        </h1>
        <h1 className="text-5xl font-semibold text-white mb-5">
          Tushar Bansodkar
        </h1>
        <h1 className="text-white text-">
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "React Developer",
                "Full Stack Developer",
                "MERN Stack Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="flex space-x-3 mt-5">
          <button className="border-2 border-gray-500 p-2 rounded-lg">
            <span>
              <FaLinkedin />
            </span>
            <span>LinkedIn</span>
          </button>

          <button>Github</button>

          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
