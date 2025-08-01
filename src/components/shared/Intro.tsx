import { Button } from "../ui/button";
import TypewriterEffect from "./TypewriterEffect";
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-between items-center z-8 m-auto w-[100%] h-[500px]">
      <div className="leading-5 ml-15">
        <h1 className="font-[Londrina_Outline] text-white text-5xl mb-8">
          Hello, I'm
        </h1>
        <h1 className="text-5xl font-semibold text-white mb-5">
          Tushar Bansodkar
        </h1>
        <TypewriterEffect
          text={[
            "Front End Developer",
            "React Developer",
            "Full Stack Developer",
            "Freelancer",
            "MERN Stack Enthusiast",
          ]}
          speed={200}
          deleteSpeed={100}
          loop={true}
        />
        <div className="space-x-4 mt-6">
          <Button variant="secondary" className="text-md">
            <FaLinkedin /> LinkedIn
          </Button>
          <Button variant="secondary" className="text-md">
            <FaGithub /> GitHub
          </Button>
          <Button variant="secondary" className="text-md">
            <FaCloudDownloadAlt /> Download CV
          </Button>
        </div>
      </div>

      <div className="relative w-80 h-80 mr-50 bg-[url(./assets/dp1.JPG)] bg-center bg-cover bg-no-repeat rounded-full">
        <svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2 -left-3"
        >
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="yellow"
            stroke-width="8"
            fill="transparent"
          />
        </svg>

        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 -top-8"
        >
          <circle
            cx="25"
            cy="25"
            r="15"
            stroke="white"
            stroke-width="3"
            fill="transparent"
          />
        </svg>

        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-25"
        >
          <circle
            cx="25"
            cy="25"
            r="10"
            stroke="white"
            stroke-width="5"
            fill="transparent"
          />
        </svg>

        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-5 top-20"
        >
          <circle
            cx="25"
            cy="25"
            r="1"
            stroke="white"
            stroke-width="5"
            fill="transparent"
          />
        </svg>

        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 top-5"
        >
          <circle
            cx="25"
            cy="25"
            r="2"
            stroke="white"
            stroke-width="5"
            fill="transparent"
          />
        </svg>

        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-8 top-16"
        >
          <circle
            cx="25"
            cy="25"
            r="2"
            stroke="white"
            stroke-width="5"
            fill="transparent"
          />
        </svg>

        <svg
          fill="#ffffff"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-10 rotate-30"
        >
          <path d="M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.5A1,1,0,0,0,21.87,19.29Zm-17.14-.5L12,6.21l7.27,12.58Z" />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
