import { FiGithub } from "react-icons/fi";
import logoImg from "../../assets/WhatsApp_Image_2023-12-12_at_15.06.49_97146e08-removebg-preview.png";
const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
    </>
  );
  return (
    <div className="navbar font-poppins bg-gradient-to-r from-[#DD00FF] to-[#9000FF]  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-gray-800"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={logoImg} />
            </div>
          </div>
          <span className="font-bold">SOFIUL</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Sofiullh01"
          className="flex justify-center items-center gap-1 pr-3 cursor-pointer"
        >
          <FiGithub className="text-3xl" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default NavBar;
