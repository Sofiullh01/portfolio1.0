import image from "../../assets/23-08-removebg-preview.png";
import imageMe from "../../assets/WhatsApp_Image_2023-12-12_at_15.06.49_97146e08-removebg-preview.png";
import resume from "../../assets/Resume.pdf";
import { FaDownload } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="my-8 font-poppins">
      <h3 className="text-lg font-bold text-custom-500 text-gradient-to-r from-[#DD00FF] to-[#9000FF] uppercase text-center  mb-6">
        About me
      </h3>
      <div className="hero-content flex-col md:flex-row">
        <div className="flex-1 relative mb-16">
          <img
            src={image}
            className="w-3/4 lg:h-96 object-cover rounded-lg shadow-2xl"
          />
          <img
            src={imageMe}
            className="w-2/4 rounded-lg shadow-2xl lg:h-72 object-cover absolute lg:right-5 lg:top-2/4 md:-right-3 md:-bottom-16 right-8 -bottom-16 border-8 border-[#9000FF] bg-gradient-to-r from-[#DD00FF] to-[#9000FF] duration-1000 "
          />
        </div>
        <div className=" flex-1 ">
          <h1 className="text-3xl font-bold lg:pr-32 md:pr-0 text-white">
          An overview of my educational background and web experience
          </h1>
          <h4 className="text-2xl font-semibold text-gray-400 mt-5 ">Education :</h4>
          <p className="pb-6 text-gray-400 text-sm">
          I graduated from Sheikh Zayed Memorial (Mollahat) High School in 2021 with a GPA of -4.67. And I am currently studying in Bangabandhu Sheikh Mujibur Rahman (Gopalganj) College.
          </p>
          <h4 className="text-2xl font-semibold text-gray-400 mt-5 ">Experience :</h4>
          <p className="text-gray-400 text-sm">
          Programming has been my passion for two years now, including some awesome GitHub projects.
          </p>
          <a
            href={resume}
            download="Resume"
            className="btn bg-transparent mt-8 border-[#9900FF] text-[#9900FF] hover:bg-gradient-to-r from-[#DD00FF] to-[#9000FF] hover:text-white duration-700 hover:border-none uppercase "
          >
            Know More
            <FaDownload className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
