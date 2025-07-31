import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="relative w-full flex items-center justify-between px-10 py-4 z-10 text-white">
      <h1 className="text-3xl font-bold">Portfolio.</h1>
      <ul className="flex space-x-8 text-xl font-medium mr-10">
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
