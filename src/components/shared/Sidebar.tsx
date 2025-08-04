const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className="w-[60%] h-svh absolute left-0 top-16 justify-center rounded-tr-md rounded-br-md bg-[#336CAE]/90 transition-transform duration-300 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(-110%)" }}
    >
      <ul className="space-y-8 w-[60%] text-center m-auto mt-10 a-auto">
        <li className="py-2 rounded-md bg-[#003B73] hover:bg-[#60A3D9] cursor-pointer">
          Home
        </li>
        <li className="py-2 rounded-md bg-[#003B73] hover:bg-[#60A3D9] cursor-pointer">
          About
        </li>
        <li className="py-2 rounded-md bg-[#003B73] hover:bg-[#60A3D9] cursor-pointer">
          Skills
        </li>
        <li className="py-2 rounded-md bg-[#003B73] hover:bg-[#60A3D9] cursor-pointer">
          Projects
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
