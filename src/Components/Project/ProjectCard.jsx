
import { MdOutlinePreview } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import PropTypes from 'prop-types';
const ProjectCard = ({proImg,title,text,live,code}) => {
  return (
    <div className="card w-96 bg-gray-900 shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={proImg}
          alt="Shoes"
          className="rounded-xl object-cover w-full h-48"
        />
      </figure>
      <div className="card-body text-gray-400 ">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-around items-center">
          <a
            href={live}
            download="Resume"
            className="btn bg-transparent my-7 border-[#9900FF] text-[#9900FF] hover:bg-gradient-to-r from-[#DD00FF] to-[#9000FF] hover:text-white duration-700 hover:border-none uppercase"
          >
            Preview <MdOutlinePreview  className="ml-2" />
          </a>
          <a
            href={code}
            download="Resume"
            className="btn bg-transparent my-7 border-[#9900FF] text-[#9900FF] hover:bg-gradient-to-r from-[#DD00FF] to-[#9000FF] hover:text-white duration-700 hover:border-none uppercase"
          >
            Code <FaFileCode  className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    proImg: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    live: PropTypes.string,
    code: PropTypes.string,

}
export default ProjectCard;
