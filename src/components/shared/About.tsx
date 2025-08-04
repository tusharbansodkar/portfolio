import React from "react";

const About = () => {
  return (
    <div className="absolute top-[420px] w-full">
      <div className="w-[70%] m-auto">
        <h1 className="text-3xl font-bold mb-5 text-gray-800">Know About Me</h1>
        <div className="text-md leading-relaxed space-y-3 animate-fade-in-up">
          <p>
            👋 Hey, I’m <span className="font-semibold">Tushar Bansodkar</span>{" "}
            — a passionate{" "}
            <span className="text-blue-600">Frontend Developer</span> with a
            strong grasp on the MERN stack. I love turning creative ideas into
            responsive and user-friendly interfaces.
          </p>
          <p>
            My journey started with a curiosity for how websites work, and it
            grew into a full-on love for building modern, fast, and accessible
            web apps. From solving complex UI problems to collaborating on
            real-world projects, I enjoy the full cycle of frontend development.
          </p>
          <p>
            When I’m not coding, you’ll probably find me exploring new tech,
            polishing UI details, or helping peers with their web development
            journeys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
