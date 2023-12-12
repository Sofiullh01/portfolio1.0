import image from "../../assets/23-08-removebg-preview.png";
import resume from "../../assets/Resume.pdf";
import { FaDownload } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="my-8">
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
            src={image}
            className="w-2/4 rounded-lg shadow-2xl lg:h-72 object-cover absolute lg:right-5 lg:top-2/4 md:-right-3 md:-bottom-16 right-8 -bottom-16 border-8 border-[#9000FF] "
          />
        </div>
        <div className=" flex-1 ">
          <h1 className="text-3xl font-bold lg:pr-32 md:pr-0 text-white">
            My qualified & of experience in this field
          </h1>
          <p className="py-6 text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
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
