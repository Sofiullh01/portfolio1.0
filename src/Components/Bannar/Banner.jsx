import profile from "../../assets/WhatsApp_Image_2023-12-12_at_15.06.49_97146e08-removebg-preview.png";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/Resume.pdf";
const Banner = () => {
  return (
    <div className="flex lg:flex-row md:flex-col-reverse justify-center items-center bg-gray-800 text-white font-poppins px-8 flex-col-reverse space-y-8 gap-y-8 ">
      <div className="flex-1 space-y-6  lg:text-left">
        <h2 className="text-5xl font-semibold">
          <span className="text-7xl text-[#DD00FF] ">
            Hay,
          </span>
          <br /> I am Sofiul
        </h2>

        <h5 className="text-3xl">
          I am a <span className="text-[#9900FF]">junior web developer</span>
        </h5>
        <p className="lg:w-[85%] text-gray-400 text-sm">
          I am a motivated and versatile individual with a passion for learning.
          I am dedicated to delivering high-quality results in web development,
          where I excel in HTML, CSS, Tailwind, JavaScript, React, Node.js,
          Express.js, and MongoDB (CRUD operations). With a positive attitude
          and a growth mindset, I am ready to make a meaningful contribution and
          achieve great things in the ever-evolving world of web development.
        </p>
        <a
          href={resume}
          download="Resume"
          className="btn bg-transparent my-7 border-[#9900FF] text-[#9900FF] hover:bg-gradient-to-r from-[#DD00FF] to-[#9000FF] hover:text-white duration-700 hover:border-none uppercase"
        >
          Resume <FaDownload className="ml-2" />
        </a>
      </div>
      <div className="rounded-full border-2 border-[#9900FF]  lg:w-[410px] lg:h-[410px] md:w-64 md:h-64 mt-4 overflow-hidden bg-gradient-to-r from-[#DD00FF] to-[#9000FF]">
        <img src={profile} alt="profile" className=" object-cover overflow-hidden w-96 " />
      </div>
    </div>
  );
};

export default Banner;
