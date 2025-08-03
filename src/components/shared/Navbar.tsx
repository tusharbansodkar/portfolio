import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
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
        <button className={`${isLargeScreen ? "hidden" : "block"}`}>
          <Menu />
        </button>
        <h1 className="text-3xl font-bold">Portfolio.</h1>
      </div>
      <ul
        className={`${
          isLargeScreen ? "flex" : "hidden"
        } items-center space-x-8 text-xl font-medium mr-10`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>
          <Button variant="secondary">Download CV</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
