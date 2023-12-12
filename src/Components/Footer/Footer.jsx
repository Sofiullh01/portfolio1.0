import logoImg from "../../assets/23-08-removebg-preview.png";
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-evenly py-10 bg-gradient-to-r from-[#DD00FF] to-[#9000FF] text-base-content ">
      <div>
        <img className="w-60" src={logoImg} alt="" />
      </div>
      <div className=" flex-1 flex flex-col  space-y-6 justify-center items-center ">
        <nav className="grid grid-flow-col gap-4">
          <a href="#about" className="link link-hover">About Me</a>
          <a href="#skills" className="link link-hover"> My Skills</a>
          <a href="#project" className="link link-hover">Reacent Project</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/sheikh_sofiul/">
              
              <FaInstagramSquare className="text-3xl text-white"  />
            </a>
            <a href="https://www.linkedin.com/in/sheikh-sofiullah-a02198299/">
              <FaLinkedin className="text-[#2e7bf8] text-3xl shadow-md"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100086781614854">
            <FaFacebookSquare className="text-[#0866FF] text-3xl shadow-md" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 Sheikh Sofiul. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
