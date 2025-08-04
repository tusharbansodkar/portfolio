import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    () => window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-between px-6 md:px-10 py-4 z-10 text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isLargeScreen ? "hidden" : "block"}`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <h1 className="text-3xl font-bold">Portfolio.</h1>
      </div>

      {isLargeScreen ? (
        <ul className="flex items-center space-x-8 text-xl font-medium mr-10">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>
            <Button variant="secondary">Download CV</Button>
          </li>
        </ul>
      ) : (
        <Sidebar isOpen={isOpen} />
      )}
    </div>
  );
};

export default Navbar;
